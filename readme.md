# TayaJS &middot; npm - 8.3.1 
This project was made as my diploma work for the Technical University of Moldova.

TayaJS is a library for making single-page applications. 

* **Module-component based:** TayaJS contains modules that are so-called parents for the components. Modules contain all necessary imports.
* **Simplicity:** TayaJS doesn't have unnecessary functionality - it has almost everything you need for making single-page applications.

## Installation
* Use this command to clone the repository on your local machine `git clone https://github.com/Jeka-13/TayaJS.git`
* Run the command `npm init`
* After run the command `npm start`. This will open the documentation of the library on `localhost:4200`

## In action

If you would like to see what my library can do, you can visit [this video](https://youtu.be/fBBNhNHqx5A). It was captured for the University purpose.

## Examples

```js
class HomeComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appHomeComponent = new HomeComponent({
    selector: 'app-home-component',
    state: {
        variableText: 'Variable text'
    },
    template: `
       <div>
          <p>{{variableText}}</p>
      </div>    
    `
})
```

This snippet of the code will display the value of the `variableText` on the page.

```html
       <make-if condition="isHappy">
            <p>I am happy</p>
       </make-if>
```

`Make-if` is a special tag that is responsible for conditional rendering. Tag requires only `condtion` keyword. 

```html
        <make-for cycle="let student of students">
            <h3>{{student}}</h3>
        </make-for>
```

`Make-for` is a special tag that is responsible for making cycle rendering. Tag requires `cycle` keyword where you should pass an array and create the variable. 

# TayaJS &middot; Chetrar Eugeniu &middot; 2023