Feature: searching a name on the portal da transparencia
    Feature Description:


    Given access to the portal da transparencia
    When typed on the search bar for "José Pereira"
    And clicked on the search button
    Then should appear results of people with "José Pereira" in their names

    Scenario: verify if search field shows information whithout typing anything
    Given access to the portal da transparencia
    When clicked the search button without putting any information
    Then should not show any information