<h3>Solace Health Take Home</h3>
First, I would like to thank you for giving me the opportunity. This take home was quite a rush and a lot of fun!

<h4>Overview</h4>
My original thought process was to break this down into four steps, product, design, performance, and testing. I wrote down my thought process before beginning as a form of whiteboarding 
<h5>Product</h5>
<ol>
<li>Ensure the product is fully functional, users should be able to filter for their desired advocate in a simple way</li>
<li>Users should be able to filter for selected column if they desire to do so</li>
<li>There are no product breaking bugs</li>
</ol>

<h5>Design</h5>
<ol> 
<li>Make sure the UI looks friendly and simple. This UI should be intended for medicare recipients, which is generally members of the older population</li>
<li>Create a table look, add the solace colors, ensure users know they are filtering and what the purpose of the page is</li>
<li>Avoid wonky UI bugs and long load times</li>
</ol>

<h5>Performance</h5>
<ol> 
<li>Add typing and interfaces for advocates and remove anti-patterns</li>
<li>We should use a database instead of a pseudo backend using typescript
<li>We should query for advocates AFTER a user attempts to filter for them, rather than pulling up all of the advocates up front. If we want to pull advocates up front anyway, let’s limit it to the first 15-20, not 15-20 thousand</li>
<li>
</ol>

<h5>Testing</h5>
* You’ll probably run out of time, but build a basic test skeleton for the product. Use AI for this as time is limited and there’s a lot more our users can benefit from outside of building tests


<h3>If I had more time...</h3>
My main three prioritizations would be
<ol>
<li>Introducing pagination or lazy loading to the table for both performance and user experience enhancements</li>
<li>Improving the filtering to require less endpoint calls as well as creating an index for the data for performance improvements</li>
<li>Use libraries to help improve the process. Some example libraries include: Lodash for it's wide utility (including filtering) and Ant Design for system designing of complex components/features
</ol>