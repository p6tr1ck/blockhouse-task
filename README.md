## Backend Setup

Change directory to the backend

```bash
cd backend
```

Install the required packages

```bash
pip install -r requirements.txt
```

Run the server

```bash
python3 manage.py runserver
```

## Frontend Setup

Once you set up the backend, it is time to set up the frontend. Assuming you are in the dashboard-page folder, change directory to the frontend

```bash
cd frontend
```

Install the required packages

```bash
npm install
```

Run the server

```bash
npm run dev
```

## Tools and Libraries Used

```bash
Django
chart.js
Tailwind CSS
Typescript
```

## Approach and Thought Process

I want to preface by saying this was my first time working with Django as the backend. Everytime I create a full stack project, I always choose to work with Express.js. Having said that, I watched a [YouTube tutorial](https://www.youtube.com/watch?v=NoLF7Dlu5mc) to help me get started and looked at the Django API documentation for further clarification.

This was also my first time working with Next.js and Tailwind CSS. I watched a [YouTube tutorial](https://www.youtube.com/watch?v=y7JCnfbETPs), rougly 45 minutes of it and after that, I started to work on the frontend. I felt that working with Next.js was not that difficult, but I was looking at the Tailwind CSS documentation for styling. I haven't used Typescript since Tech4Good (an organization I was a part of), so I was rusty and had to sharpen my skills.

I decided to use chart.js to create the charts and read through this [excellent blog](https://blog.logrocket.com/using-chart-js-react/) that helped me create most of the charts. I could not get the candlestick chart to work even though the candlestick component correctly fetched the data. It was due to my implementation and there was hardly any documentation on how to create the candlestick chart which made it more difficult.

Overall, I learned new technologies that I will be using for my next projects (Next.js and Tailwind.css)! This was a great experience to utilize my full stack skills to build this application. I am pleased of how the result turned out, but I am a bit sad that I could not get the candlestick chart to work.
