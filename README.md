# SI539 Final Project W24
Yujia Gao

## Project Summary
This website summarizes my first eight months spent in the US. It’s my first journey studying abroad and navigating life on my own and Ann Arbor embraced me with open arms. To keep these cherished memories last, this site captures experiences I've encountered here— from discovering delectable eateries to engaging in enriching activities that deepen my understanding of the U.S., and also the amazing MOLI dancing club I participated in! Therefore, I made four pages for this project: “index”, “food”, “MOLI”, and “activities”. My wish is this website will evolve over time as my journey unfolds. I have to say the time spent reminiscing about these joyful moments transported me back to the scenes of those experiences, which was truly joyful.

## Progress Log
**Total hours spent: 17 hours**

I organized this project into tasks rather than following a specific weekly schedule. As a result, I kept track of the hours spent on each task.

### Ideas, Texts and Images
- Hours spent: **3 hours**
  - Breakdown: 30 mins on finalizing the topic; 1h30min on all the texts; 1h on finding suitable images from my phone and desktop.
- Challenges: The most challenging aspect of this process was finalizing the topic—a subject that both inspired my design and held some personal meaning. Additionally, since I hadn't developed the habit of categorizing my pictures, it took quite some time to find suitable images.
- Success: I successfully found something that I had a lot to say and felt comfortable writing about, which made the writing process much easier for me.

### Mobile View
- Hours spent: **4 hours**
  - Breakdown: Approximately 1h on each page, including completing the HTML codes and styling in CSS files.
- Challenges: Navigation bar was the trickiest, as it has several “layers” to access different parts of the bar, like the largest container `<nav>`, and then `nav ul`, `nav ul li`, `nav ul a`, etc. I tried several places to add the hover effect to make it hover the right thing that I wanted.
- Success: I found new fonts that suited the style of my web pages better from Google Fonts and incorporated them successfully in my codes. I generated my own favicon on Favicon.io to make it more “professional” (Pink is the main color of my webpage, and “g” is the first letter of my last name). I also had the basic grid structures ready on each page, which laid a good foundation on my implementation for tablet and desktop view.

### Java Script (index.html, food.html)
- Hours spent: **6 hours**
  - Breakdown: 1h on the "clicking" event functionality for both "index.html" and "food.html" pages in mobile view; 5 hours on implementing functionality that allows the page to utilize different JavaScript functions based on various screen size conditions. 
- Challenges: Make the html adopt different Java Script functions under different screen sizes. (More details on this in the next section!)
- Success: I implemented the following functions: On the index page, clicking on the pictures in the “Discovery” section automatically directs users to the corresponding HTML page. On the “food” page, clicking on each food image moves the picture to the side and reveals a textbox introducing the restaurant. Additionally, I included a button that allows users to “unfold all” or “collapse all”.

### Tablet and Desktop View
- Hours spent: **3 hours**
  - Breakdown: Around 45 mins on each page.
- Challenges: When the screen size increases, I often need to arrange two items horizontally. To achieve this, I have to add new <div> elements in HTML so as to apply `grid` or `flex` display properties. However, this sometimes alters the original styles in mobile views, as the additional `<div>`layers can affect the layout by changing the accessibility to the content. I forgot to change the styles in the mobile view accordingly, and it led to some errors.
- Success: Images and texts would adjust their sizes according to the size of the screen. Also, I added more columns to the grid to “horizontally spread” the contents as the screen became wider.

### Validation and Troubleshooting
- Hours spent: **1 hour**
  - Breakdown: 30 mins on validating and fixing errors detected by validation tools (Wave, W3C html, W3C css, aXe); 30 mins on troubleshooting things that went wrong after deploying it on Github Page.
- Challenges: At first, I had set the text color of the navigation bar to white, which appeared fine to me when viewing with the naked eyes, but Wave detected low color contrast. Additionally, aXe pointed out the lack of keyboard access on scrollable items and a missing alt text for one of my images. After deploying the page on Github, I encountered a random issue where one of the pictures didn't respond to mouse clicks. Despite finding no apparent issues in the code, I tried copying the code from other images, and miraculously it worked. Furthermore, although the favicon was visible on my local computer, it disappeared after deployment to Github.
- Success: I changed the word color to black to fix the color contrast error, and added `tabindex` in the html file for scrollable items to address the keyboard access issue. For the favicon, I searched on the Internet and found that I should include a question mark after the source of the picture, like `<link rel="icon" type="images/x-icon" href="images/favicon.png?">`. Now my website should not have any errors.

## Biggest challenge
I have a JavaScript function in my mobile view that triggers when an image is clicked. Images were all initially positioned in the second column of a grid, upon click, it moves to the first column and toggles the display of a restaurant's text description from `none` to `block`. A second click returns the image to its original position in the second column and hides the text again. In tablet and desktop views, I adjusted the column number to accommodate wider screens. Therefore, the positions of images and texts before and after the clicks changed, so I had to write a different javascript function on those same images on Tablet and Desktop view. However, a challenge arose: writing separate functions for small and large screens proved ineffective. The script seemed to automatically determine which function to use upon initial loading, but adjusting the screen size caused awkward behavior of the images as the screen size crossed the threshold between small and large screens.

I attempted various ways of trying to solve it, such as embedding code for small and large screens directly within the `checkScreenSize` function instead of writing two separate ones and calling them in this check screen size function. I then guessed that the issue may have stemmed from using identical variable names for elements acquired by `document.getElementById()` in both small and large screen contexts, thus leading to them somehow overwriting each other, resulting in the error. However, this approach didn’t solve the issue. Later I realized that maybe it was not about the variable names, but I should remove the event listeners specified on the items when changing from utilizing the function for small screen and the one for large screen and vice versa, but this didn’t work either. At some point, I even briefly considered disabling the script for tablet and desktop views and only keeping it in the mobile view, but in the end, I still wanted to keep this interaction for all views.

After struggling for five hours, I found a solution: creating a function that reloads the webpage upon detecting a screen size change above or below 768px. This ensured smooth operation regardless of screen size adjustments. Now, whenever the window is resized, the page reloads and applies the appropriate small or large screen function. This solution works seamlessly and the reload is hardly noticeable to users. I searched on the Internet and didn’ t find people encountering similar problems or any superior alternatives. Nevertheless, I will keep working on this issue.

## Lessons Learned
1. Even though HTML and JavaScript often involve repeating similar blocks of code to display multiple items on a webpage, I've realized that the technique of writing functions can still be applied in JavaScript to make the codes more concise. By encapsulating repetitive tasks within functions, code becomes easier to manage. This approach, known as “DRY” (Don't Repeat Yourself), promotes code reusability and maintainability.
1. Javascript is really powerful, but sometimes it can be annoying as even when everything seems to be good in logic and should work in this way, random errors could still occur. This makes Java Script just like any other programming languages I have dealt with before. I learned a better way to debug in this class, which is to use the `console.log()` to print the values of desired variables so as to keep track of which line of code goes wrong. 
1. Color contrast in web design can be tricky, so it's essential not to rely solely on our naked eyes but to validate using professional color validators. My experience with this project has shown me that even if things appear visually good to us, validators may still flag them as errors. This highlights the importance of considering factors like accessibility for elderly individuals or those with visual impairments.
1. This project has underscored for me the crucial role of validation tools in ensuring accessibility. While designing the webpage, I thought I had identified several accessibility issues effectively, such as implementing a “skip to main content” button and providing alternative texts for images. However, I still encountered unexpected errors from validation tools, such as missing an alt text or failing to add keyboard access to scrollable items.
