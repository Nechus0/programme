import asyncio
from playwright.async_api import async_playwright
import os
import sys

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PageError: {err.stack}"))
        
        file_url = "file://" + os.path.abspath("index.html")
        print("Opening:", file_url)
        await page.goto(file_url, wait_until='networkidle')
        
        print("Filling patient data...")
        await page.fill("#p-name", "Test Patient")
        await page.fill("#p-dob", "1990-01-01")
        
        print("Clicking Daten absenden...")
        await page.evaluate("kioskSubmit()")
        await page.wait_for_timeout(2000)
        print("Done.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
