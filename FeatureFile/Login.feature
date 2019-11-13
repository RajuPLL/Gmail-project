Feature: Gmail Login feature

  Scenario: Login to Gmail with Correct credentials
    Given user is on Gmail login page
    When user enters "karmakar9177@gmail.com" as emailId
    And user clicks on next button
    Then user is on password page
