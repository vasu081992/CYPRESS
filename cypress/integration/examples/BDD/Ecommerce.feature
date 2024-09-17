Feature: End to End E Commerce validations

    Application Regression 

    @Test1
    Scenario: E commerce products delivery

       Given I open the e commerce website
       When I add items to the cart 
       When I validate the total price of the cart
       Then Select the country and submit and verify the Success message

   @Test2
    Scenario: Filling the form to shop 
 
  

      Given I open the e commerce website
      When I fill the form details completely
          |name|gender|
          |Vineela |Female|
      When   Validate the form behaviour
      Then select the shop page




