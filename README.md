# Carrier Corporation Candidate Brief

## My Approach

First, I studied the instructions and assets given to me, and tried to tackle the table. Since this seems to be pulled from a manual, I figured the average user would want a similar design; it would complicate things too much if I tried to fancy it up and/or change the order. However, I over-complicated building the table at first, thinking I had to use CSS "display: grid" to get the desired effect of columns and/or rows taking up multiple spaces. Just in case I checked [W3Schools](https://www.w3schools.com/html/html_tables.asp) and (re-)discovered the "colspan" and "rowspan" tags. I had completely forgotten about those, so I'm glad I checked! The benefit of these is that it'll closely match the image given to me, and be screen reader friendly where grid is not. (If grid were to be used, it'd need aria labels to be screen reader friendly.)

### Design

Again, I tried to match the image provided as close as possible since I figured the user would be used to it. For the tables, I opted to bring a tiny bit of color variation so they're easier for the user to read. I added a padding of 20px and 16px to the cels so the text isn't pressed right up against the borders. I did decide to change the uppercase text to standard case, since the uppercase text was a bit harsh and not necessary for a website.

### Responsiveness

The lowest screen size I accounted for is 320px. I used Firefox, Chrome, and Edge on my computer to make sure it's compatiable across those browsers, and Safari on my phone. I put a max width of 1000px on containers, so the site content is not stretched out completely on 2k or higher screens; for a real-world scenario, I would use the max size of whatever the website I'm coding for is. As for the tables, I felt that 1000px was still a little large, so I shrank them to max of 900px and put a margin: auto on them so they're centered horizontally.

## Limitations & Solutions

### Table Layout

As I mentioned above, I wanted to keep the final look close to the given image as possible. However, in the Status Code table, I decided not to split it into 3 major columns. While in a manual it makes sense and is possible, on a website where different font and screen sizes have to be accounted for, it's just not possible in the time given. If I had more time, I would try to tackle that, but for now my solution was to just have it be one long stretch.

Not only that, but I wanted to create a search bar for the Status Code Table so the user can easily find what they need. Originally, my table was coded so that everything was under one single tbody. To make sure my code was proper, I went through and grouped all the majors in their own tbodies so that they can searched much more easily.

### Machine Icons/Typeface

While creating this project, I noticed that the PNG given was too small to extract the machine icons (for example idL) from. Because of this, I manually typed each out icon, when ideally there would be an svg or something similar instead. To make up for any potential confusion, I used a [free-to-use font](https://github.com/keshikan/DSEG/releases) to make it seem like the machine labels, however I noticed that some letters (like h and c) are lowercase-only. In a normal setting, I would ask for deliverables of the icons and/or their typeface so I could use them on the web page and prevent user confusion.
