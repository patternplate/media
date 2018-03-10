> Publishing repository for shared web assets

## patternplate-media

This repository contains a minimal setup to create
optimized versions of your web assets. 

It picks up assets from `src/` and places size-optimized copies
in `docs/`. 

The `docs/` directory is served by GitHub Pages at [patternplate.github.io/media](https://patternplate.github.io/media)

## Getting started

```bash
git clone git@github.com:patternplate/media.git
cd media
yarn
```

## How to

### Add a new asset

* Place your image in `src/images`, e.g. `src/images/hello-word.png`
* Add, commit and push the changes in `src`
  A `husky` precommit hook will take care of image optimization for you.

  ```bash
  git add src/images/hello-world.png
  git commit -m "Add hello-world image"
  git push
  ```

* After pushing the image will be available at [images/hello-world.png](https://patternplate.github.io/media/images/hello-world.png)

### Remove an asset

* Remove the asset from `src/images` and `docs/images`

* Add, commit and push the changes in `docs` and `src`

  ```bash
  git rm src/images/hello-world.png
  git add docs/images/hello-world.png
  git commit -m "Remove hello-world image"
  git push
  ```

* After pushing the image will no longer be available
