# Luma

Hi, My name is Manoj Kumar

APP URL: [https://luma-hazel.vercel.app/](https://luma-hazel.vercel.app/)

## Techstack
- Nextjs
- Typescript
- Tailwind css
- Shadcn
- Zustand
- Remotion

## Note: Remotion video export
I was able to build the video but to export the video I have to use remotion lambda in nextjs there is no any other options and requires billing and as of now I do not have
![Remotion Preview](/public/image.png)

## Setup for development
- Clone the repository
```bash
git clone git@github.com:Iamsidar07/luma.git
```

- Install dependencies
```bash
pnpm install
```

- Run the application
```bash
pnpm dev
```
Now navigation to [http://localhost:3000](http://localhost:3000)

## Steps to test
- Navigate to home page
- Click on the create event button
- Fill all the required form and upload image or video for theme
- For preview click on the preview button it will navigate to ```/view``` page
- It will persist the data in local storage using zustand

### Thanks