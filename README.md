# Jiyū Active

A mock up website of Jiyū Active.

Disclaimer: Brand story was 100% crafted myself and is by no means representative of Jiyū Active as a brand.

## Technologies Used

A fullstack project with PostgreSQL as the database, Django as the backend and ReactJS as the frontend.

For Django, django restframework, simpleJWT, cloudinary storage were used for routing, authentication and image hosting.

For ReactJS, the useContext hook was used as the main state management for global states, such as superAdmin and cart.
JWT-decode was used for decoding the JWT tokens returned.
React router 6 was used for the routing of the different pages.
Tailwindcss was implemented for the app.

ERD diagram
![ERD diagram](/client/readmeimages/ERD.png)

React setup
![React Setup](/client/readmeimages/React_setup.png)

## Wireframes

![Homepage](/client/readmeimages/Homepage.png)
![All Products](/client/readmeimages/All_products.png)
![Single Product](/client/readmeimages/SingleProduct.png)

Wireframes are also on [figma](https://www.figma.com/file/kIcHzCl717uECx40ivAsnS/Jiyuu-Active?node-id=0%3A1)

## Approach Taken

As this is a project that has to be completed in a week, it is definitely a challenge. The approach I took was to get started on the backend models, serializers and views. Once most of the items were done, I moved on to frontend using ReactJS to get all the admin functions working. Then followed by the users views. While working on the frontend, if there were any further views required on the backend that were missed out, I went back to create the views and url patterns accordingly.

## Unsolved Problems &/or Major Hurdles

1. Backend routes are unprotected. Althought I checked on the frontend, it would be ideal to perform isAuthenticated and isAdmin on the backend as well.
2. Wanted to use this project to practice Redux Toolkit. However, due to the tight timeline and my own unfamiliarity with Redux Toolkit in general, I was not able to implement Redux Toolkit. This is something that can be refactored as well.
3. Despite creating all the backend endpoints of product reviews, it was eventually not implemented due to time constraints. This is something that can be looked into and be further implemented.
4. Ideally on the users' order side, not only should they see their own order number, they should be able to view their ordered products as well. This table in Postgres was also dropped eventually due to time constraints. This is something that can be done.

### Credits

CSS
Huge thanks to [khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa) as many of the styling was modified from his templates on [tailwindcomponenents](https://tailwindcomponents.com)

Images
All images are not my own. Landing page images are kindly provided to me by the Jiyū Active. Product images are from Gym Wear Active.
