# Reddit Clone

This project is a clone of the famous website [Reddit](https://www.reddit.com/) and the result of this [Tutorial](https://www.youtube.com/playlist?list=PLtZ8UuFjvnDe2CHXYawMVLpFsH4G8urfM).

## Install

### Clone the repository

```shell
git clone git@github.com:AyazBulls/reddit-clone.gitt
```

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.5.5`

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle && yarn
```

### Initialize the database

```shell
rails db:setup
```

## Serve

```shell
rails s
```