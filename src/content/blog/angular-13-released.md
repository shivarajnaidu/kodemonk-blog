---
title: 'Angular 13 Released! See what`s new'
slug: '/angular-13-released'
author: [Yuvaraj V]
tags: [angular, javascript, ng, spa]
featuredImage: ../images/angular.svg
date: '2021-11-14'
---


Angular team released Angular 13 recently with lots of performane improvements and especially moving angular rendering engine to all Ivy mode. They just removed the legacy View engine from angular 13. To update your project to angular 13 first update your cli to angular 13 with `npm i -g @angular/cli` and run `npm update`.
for more details see [angular's update guide](https://update.angular.io)
Here we will see what is new in angular 13.

## 1. Moving angular rendering engine to IVY
As we already know the new IVY engine opens the doors for lot of new improvements and performance enhancements and since version 9-10 it's been enabled in angular as a default rendering engine and legacy view engine was there as a fallback (to support old projects and packages).
As planned now in angular 13 the they removed the View engine fully from angular 13 and this will help the team to concentrate and expand more on IVY. No more `ngcc` (Angulr compatibility compiler).


## 2. CHanges in Angular packaging format
The new changes to the APF improves the size of output bundles by leaving the older output formats behind and by leverging the new ES2020 features. So we no longger need to rely on `ngcc`, it means reduced packages sizes and improved performance with more modern approach. 


## 3. Rxjs 7
The new angular added latest rxjs version 7.
The new rxjs version have some breaking chnages.. `.toPromise` removal, API signature changes to `subbscibe()` and `throwError()` are some of the commonly used apis that is broken in this release. 
Here you can read more about [changes in rxjs 7](https://rxjs.dev/6-to-7-change-summary)


## 4. Improved Compile times
The new angular cli 13 uses [Persistent build cache by default](https://github.com/angular/angular-cli/issues/21545) that improves the compile / build times anywhere between 60 to 68%. This speed imrovements will results in less ci/cd build time and more happy developers with speedy compilation in devlopemnt :)


## 5. No more IE11 support
We all know that Microsoft already [announced](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/) end of life for it's IE11. So angular community decided to remove the support for IE11 in angular 13 with this change we can completely remove some of the IE specific polyfills like webb animations and modern css polifils for IE etc.. this will result in reduced build sizes.

Running ng update will automatically drop these IE-specific polyfills and reduce bundle size during project migration.
Those who want to support IE11 support can stick with angular 12 till Nov 2022.


## 6. Optional NgModules
Angular community moving towards removal of modules in the future.. as part of this plan now they just made modules as optional.
The removal of modules will reduce the mental overhead that angular devs has with Native ES6 modules & Angular modules and will allow us to build standalone components easily.
This will even allow us to do the lazy loading in component level easily in near future by enabling component level code splitting like one we have in react CRA.


## 7. Simplified dynamic component insertion
Before angular 13 we need to use ComponentFactoryResolver service to retrive teh component before injecting it in the view. But we no longer require that to inject component dynamically in the view.

#### Before
```ts
@Component({ … })
export class MyComp {
    constructor(private viewContainerRef: ViewContainerRef,
                private componentFactoryResolver: 
                        ComponentFactoryResolver) {}
    createMyComponent() {
        const componentFactory = this.componentFactoryResolver.
                             resolveComponentFactory(MyComponent);
    
        this.viewContainerRef.createComponent(componentFactory);
    }
}
```
#### Now (With new api)
```ts
@Component({ … })
export class MyComp {
    constructor(private viewContainerRef: ViewContainerRef) {}
    createMyComponent() {
        this.viewContainerRef.createComponent(MyComponent);
    }
}
```


## Router Updates
1. Now you an disable navigation  by binding `undefined` or `null` to `routerLink` 
2. New event added `routerLinkActive` that will be triggred whenever the active link changes.
   
```html
 <a 
   routerLink="/orders"
    routerLinkActive="active-link"
   (isActiveChange)="onRouterLinkActive($event)">Orders</a>
```
3. emit activate/deactivate events when an outlet gets attached/detached
4. Option to correctly restore history on failed navigation
5. Allow question marks in query param values

## Angular forms
Angular 13 improved the typing by narrowing the types for form status changes and now the angular forms allow us disabling min/max validators dynamically (by setting the value to null)


You can follow my guides/updates on youtube https://www.youtube.com/c/KodeMonk