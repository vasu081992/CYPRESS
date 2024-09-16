Feature: End to End E Commerce validations

    Application Regression 


    Scenario: E commerce products delivery

       Given I open the e commerce website
       When I add items to the cart 
       And I validate the total price of the cart
       Then Select the country and submit and verify the Success message


    Scenario: Filling the form to shop 
 
  

       Given I open the e commerce website
      When I fill the form details completely
      Then Validate the form behaviour
      Then select the shop page




