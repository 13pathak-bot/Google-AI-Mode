# **Google AI Focused Window**

A lightweight browser extension that provides a fast and focused way to access Google's AI Search Mode using a keyboard shortcut. Instead of opening a distracting new tab, this extension launches your query in a clean, dedicated popup window that automatically closes when you're done.

*(Suggestion: You can record a short GIF of the extension working and replace the link above to show it off\!)*

## **Features**

* **🚀 Keyboard Shortcut:** Press Ctrl+Shift+K (or Cmd+Shift+K on Mac) to instantly open the search prompt from any page.  
* **✨ Focused Window:** Your search query opens in a clean, separate popup window, free from the clutter of a normal browser tab.  
* **🧠 Auto-Close:** The focused window smartly closes itself as soon as you click away, keeping your workspace tidy.  
* **🎨 Clean Layout:** Custom CSS is injected into the Google Search page to hide unnecessary elements and fix layout issues, ensuring the content fits perfectly within the window.

## **Installation**

Since this is not on the Chrome Web Store, you can load it directly into your browser:

1. **Download:** Download this project's files, preferably as a ZIP, and unzip them to a folder on your computer.  
2. **Open Browser:** Open your Chromium-based browser (like Google Chrome, Brave, or Edge).  
3. **Navigate to Extensions:** Type chrome://extensions in the address bar and press Enter.  
4. **Enable Developer Mode:** In the top-right corner of the extensions page, toggle on "Developer mode".  
5. **Load the Extension:** Click the "Load unpacked" button that appears.  
6. **Select Folder:** In the file dialog, navigate to and select the folder where you unzipped the project files.  
7. **Done\!** The "Google AI Focused Window" extension should now appear in your list of extensions and be ready to use.

## **How to Use**

1. On any webpage, press the keyboard shortcut: Ctrl+Shift+K (or Cmd+Shift+K on Mac).  
2. A small search box will appear. Type your question and press Enter.  
3. The Google AI Search results will open in a new, focused window.  
4. When you are finished, simply click back to your main browser window, and the focused window will automatically disappear.

## **File Structure**

* manifest.json: The core file that defines the extension's permissions, features, and file references.  
* background.js: The service worker that acts as the extension's "brain." It manages the creation, updating, and auto-closing of the focused window.  
* popup.html / popup.css / popup.js: These files create the small initial search box that appears when you use the keyboard shortcut.  
* injector.css: A crucial CSS file that is programmatically injected into the Google Search page to override its styles and ensure the content is readable within the smaller window.  
* images/: Contains the icons for the extension.

## **Contributing**

This was a personal project, but feel free to fork this repository, suggest improvements, or open an issue if you find any bugs\!