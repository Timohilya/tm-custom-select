# tm-custom-select
<h4>Add css:</h4>
File: select.css
<h4>Add js:</h4>
File: select.js
<h4>Add html code:</h4>
<pre>
&lt;div data-select-item class="tm-select"&gt
    &lt;div data-select-button class="tm-select__selected" tabindex="0" onkeypress="if(event.keyCode===32||event.keyCode===13){this.click()};"&gt
        &lt;p&gt
            УКР
        &lt;/p&gt
        &lt;div class="tm-select__arrow"&gt&lt;/div&gt
    &lt;/div&gt
    &lt;div data-select-options class="tm-select__options"&gt
        &lt;a&gt
            Пункт 1
        &lt;/a&gt
        &lt;a&gt
            Пункт 2
        &lt;/a&gt
        &lt;a&gt
            Пункт 3
        &lt;/a&gt
    &lt;/div&gt
&lt;/div&gt
</pre>
<h4>Add attribute data-select-label for label:</h4>
<pre>
&lt;label for="label1"&gtSelect with label&lt;/label&gt
  &lt;div data-select-item class="tm-select"&gt
      &lt;div data-select-button <strong>data-select-label="label1"</strong> class="tm-select__selected" tabindex="0" onkeypress="if(event.keyCode===32||event.keyCode===13){this.click()};"&gt
          &lt;p&gt
              УКР
          &lt;/p&gt
          &lt;div class="tm-select__arrow"&gt&lt;/div&gt
      &lt;/div&gt
      &lt;div data-select-options class="tm-select__options"&gt
          &lt;a&gt
              Пункт 1
          &lt;/a&gt
          &lt;a&gt
              Пункт 2
          &lt;/a&gt
          &lt;a&gt
              Пункт 3
          &lt;/a&gt
      &lt;/div&gt
 &lt;/div&gt
</pre>
<h4>Add hidden input if need:</h4>
<pre>
&lt;div data-select-item class="tm-select"&gt
    <strong>&lt;input data-select-input type="hidden"&gt</strong>
    &lt;div data-select-button class="tm-select__selected" tabindex="0" onkeypress="if(event.keyCode===32||event.keyCode===13){this.click()};"&gt
        &lt;p&gt
            УКР
        &lt;/p&gt
        &lt;div class="tm-select__arrow"&gt&lt;/div&gt
    &lt;/div&gt
    &lt;div data-select-options class="tm-select__options"&gt
        &lt;a&gt
            Пункт 1
        &lt;/a&gt
        &lt;a&gt
            Пункт 2
        &lt;/a&gt
        &lt;a&gt
            Пункт 3
        &lt;/a&gt
    &lt;/div&gt
&lt;/div&gt
</pre>
