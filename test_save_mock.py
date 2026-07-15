import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PageError: {err.stack}"))
        
        await page.add_init_script("""
            window.supabase = {
                createClient: () => ({
                    auth: {
                        getSession: async () => ({ data: { session: { user: { id: 'test' } } } }),
                        onAuthStateChange: () => {}
                    },
                    from: (table) => ({
                        select: () => ({ eq: () => ({ single: async () => ({ data: { role: 'arzt', full_name: 'Dr. Test' } }) }) }),
                        insert: async (data) => ({ data: data, error: null })
                    })
                })
            };
        """)
        
        file_url = "file://" + os.path.abspath("index.html")
        await page.goto(file_url)
        await page.wait_for_timeout(1000)
        
        print("Filling patient data...")
        await page.fill("#p-name", "Test Patient")
        await page.fill("#p-dob", "1990-01-01")
        
        print("Evaluating savePatient()...")
        res = await page.evaluate("savePatient().then(r => r).catch(e => e.stack || e.toString())")
        print("Result:", res)
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
