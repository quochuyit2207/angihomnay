# angihomnay

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
///////////////////////////////////////

food-wheel-app
│
├── app
│ ├── page.tsx // trang chọn chức năng (2 ô vuông)
│ │
│ ├── random
│ │ └── page.tsx // quay món có sẵn
│ │
│ ├── custom
│ │ └── page.tsx // quay món tự nhập
│ │
│ ├── layout.tsx
│ └── globals.css
│
├── components
│ ├── FeatureCard
│ │ └── FeatureCard.tsx // ô vuông chọn chức năng
│ │
│ ├── Wheel
│ │ ├── Wheel.tsx // vòng quay
│ │ └── Pointer.tsx // kim chỉ
│ │
│ ├── FoodInput
│ │ └── FoodInput.tsx // nhập món custom
│ │
│ ├── FoodList
│ │ └── FoodList.tsx // hiển thị list món
│ │
│ └── ResultModal.tsx // popup kết quả
│
├── data
│ └── foods.ts // món có sẵn
│
├── hooks
│ ├── useWheel.ts // logic quay
│ └── useFoods.ts // quản lý danh sách món
│
├── utils
│ ├── random.ts // random index
│ └── wheelMath.ts // tính góc quay
│
├── types
│ └── food.ts
│
├── styles
│ └── wheel.module.css
│
└── public

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
