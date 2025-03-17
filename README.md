This is a stateless server structure or setup that you can install locally and modify according to your requirements and later deploy to vercel.

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

First, clone the repository to your local machine:

<code>git clone https://github.com/sabinacharyadev/stateless-server-vercel.git</code>

### 2. Install Dependencies

Navigate to the root directory and install dependencies:

<code>cd stateless-server-vercel</code>

<code>yarn</code>

### 3. Allowing vercel to accept any defaults to run locally

<code>yarn vercel --yes</code>

### 4. Run the Application

<code>yarn dev</code>

 <!-- yarn global add vercel -->

### USEFUL TIP

If you are here to convert your existing project to stateless server and host it to vercel

### 1. Add vercel.json to your root folder, this notifies vercel that it is a server

![](https://i.postimg.cc/d0nHjT4L/Screenshot-2025-03-17-at-1-52-58-pm.png)

### 2. Remove your app lifecycle and export app as function

![](https://i.postimg.cc/R0V5mmYJ/Screenshot-2025-03-17-at-1-53-25-pm.png)
