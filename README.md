# Android-Club
## Assignment Repository for Android Club
### Assignment 2 - Login Page
#### Issues
- Spacing isn't great when rotated.
- Background Image moves with Keyboard; Should be static.
- "Forgot Password" is not a Link/Button, just a Text Component.

#### Screenshots
<img src="https://user-images.githubusercontent.com/95037274/150112484-4fcc9ce2-86e3-45b6-ba84-b7e3fece1bca.png" alt="Screenshot Portrait"
title="Login Page Portrait" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/150112506-271143ac-266f-4a88-ae06-3d658736be16.png" alt="Screenshot Landscape"
title="Login Page Landscape" height="200" /> \
<img src="https://user-images.githubusercontent.com/95037274/150112512-aef99ff2-4f5f-412d-92eb-6855098cab9f.png" alt="Screenshot Landscape 2"
title="Login Page Landscape" height="200" />

### Assignment 3 - Counter
- All screen elements dynamically adjust sizing for different screens.
- Used states to keep track of a variable's value. Increments/Decrements with buttons.
- Conditional Statement changes colour of the counter based on variable's value. ( <0 = Grey, >=0 = White )
- Inspiration: https://dribbble.com/shots/17313129-Cloud-Storage-Mobile-Apps-Design

#### Issues
- Not much inspiration from the above link.
- Border Radius won't change for different screens, no idea how to make it do so.
- Font sizes do not change based on screen size, yet.
- Font refuses to change.

#### Screenshots
<img src="https://user-images.githubusercontent.com/95037274/150578307-7b37a939-a9e3-4f07-b05e-20dcbcbea6fa.png" alt="Screenshot Portrait"
title="Counter Portrait" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/150578320-fb2c7920-2b7e-48e3-b54c-cbf527169644.png" alt="Screenshot Landscape"
title="Counter Landscape" height="200" />

### Assignment 4 - Banking/GPay Ripoff
- Used FlatList, ScrollView, Modal, Activityindicator, and React Navigation.
- Inspiration: https://dribbble.com/shots/17411851-finance-mobile-interface
https://dribbble.com/shots/17409666-Investkan-Investment-Bank-Mobile-App/attachments/12536816?mode=media

#### issues
- Definitely not an optimised project; Extremely laggy until I scaled down the source images.
- Icons look pixelated and have jagged lines, irrespective of source image size.
- FlatList "Cards" Shadow(Elevation) gets cut off by Parent View's Padding. 
- Probably not the right way to implement React Navigation, but I liked the SplashScreen, so I used it for now. 

#### Screenshots
<img src="https://user-images.githubusercontent.com/95037274/153058670-3d8f8ed6-f096-45e2-9e8c-6f91ab8f5468.png" alt="Screenshot 1"
title="Splash Screen" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/153058703-d4475bf6-6ded-4826-8ac1-c81f9ba5108c.png" alt="Screenshot 2"
title="Activity Indicator" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/153183483-8b505089-6585-42c0-a3a2-b66659fb828b.png" alt="Screenshot 3"
title="Home Page" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/153183506-4722e613-6b28-4545-875a-ef9fbc885b14.png" alt="Screenshot 4"
title="Modal Pop-Up" height="500" /> 

### Assignment 5 - Context API
- Reused Counter Application to implement Context API.
- Top(Counter) and bottom(Buttons) halves of the screen are seperate components, and a "global state" is used to link them both.
- Changed '+', '-' from text to vector icons.

#### Issues
- Running with --variant=release(to test on my physical device) causes app to crash/not open. Running the app normally works though.
 
#### Screenshots
<img src="https://user-images.githubusercontent.com/95037274/156096973-d6778093-c6a4-42b8-af01-3d7bc7af8e6e.png" alt="Screenshot Portrait 1"
title="Counter Portrait" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/156096978-db8d69ef-84b9-45bd-baa5-2d901f0c1926.png" alt="Screenshot Portrait 2"
title="Counter Portrait 2" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/156096981-c9871289-38fc-44c8-8d5f-278d9643589b.png" alt="Screenshot Portrait 3"
title="Counter Portrait 3" height="500" /> 

### Assignment 6 - React Navigation
- Basic Application using Native-Stack, Drawer and Bottom-Tabs Navigators(Nested)

#### Issues
- Gesture Handler deprecated API warning

#### Screenshots
<img src="https://user-images.githubusercontent.com/95037274/157311529-38524f03-e83a-42c7-b837-8ea544362a50.png" alt="Screenshot Portrait 1" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/157311539-85fd6711-e256-4729-8b32-593ab010c7a9.png" alt="Screenshot Portrait 2" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/157311542-8779c144-d86d-4eec-a030-8738e3ab1208.png" alt="Screenshot Portrait 3" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/157311545-190a2e22-0430-47b4-8a62-deb0d6f5753e.png" alt="Screenshot Portrait 4" height="500" /> \
<img src="https://user-images.githubusercontent.com/95037274/157311547-e4af4ec2-cf29-473a-bc3b-e8463e5e1ce5.png" alt="Screenshot Portrait 5" height="500" /> \