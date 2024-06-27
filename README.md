# Next.js 14 with NextAuth.js GitHub Authentication

This repository demonstrates how to set up GitHub authentication in a Next.js 14 application using NextAuth.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a basic setup for integrating GitHub authentication in a Next.js 14 application using NextAuth.js. NextAuth.js is a complete open-source authentication solution for Next.js applications.

## Features

- GitHub authentication
- Next.js 14 integration
- Secure and scalable authentication

## Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- A GitHub account

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mohdzaker/nextjs-nextauth-github-auth.git
    cd nextjs-nextauth-github-auth
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    NEXTAUTH_URL=http://localhost:3000
    GITHUB_ID=your_github_client_id
    GITHUB_SECRET=your_github_client_secret
    ```

2. Obtain your GitHub Client ID and Client Secret by creating an OAuth App in your GitHub settings.

## Usage

1. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Click on the "Sign in with GitHub" button to authenticate with your GitHub account.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
