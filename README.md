ionRangeSlider-Angular-Directive
================================

Angular.js directive for popular jquery plugin ionRangeSlider with updatable attributes

How To Use
==========

Specify 'ionSlider' as the dependency of your module.

In your html use 
```html
<ionslider></ionslider>
```

Following attributes can be used inside <ionslider></ionslider> tag:

	min, (updatable)
	max, (updatable)
	type,
	prefix,
	max-postfix,
	prettify,
	grid,
	grid-margin,
	postfix,
	step,
	disable, (updatable)
	hide-min-max,
	hide-from-to,
	from (updatable),
	to (updatable)
	
Value Change Events
-------------------

You can also set the change event in the tag
```html
<ionslider on-change='rangeChangeCallback'></ionslider>
```
In your controller

$scope.rangeChangeCallback = function(sliderObj){
	var changedValue = sliderObj.from;
}

Drag Finish Events
------------------

To get notified when the User releases the handle, add a event handler function like this:

```html
<ionslider on-finish='rangeFinishCallback'></ionslider>
```
In your controller

$scope.rangeFinishCallback = function(sliderObj){
	var newValue = sliderObj.from;
}

Example HTML
------------

```html
 <ionslider type="single"
        grid=true
        min="model.min"
        max="model.max"
        from="model.currentMinValue"
        to="model.currentMaxValue"
        disable="model.disabled"
        on-change="rangeChangeCallback"
        on-finish="rangeFinishCallback"></ionslider>
```
