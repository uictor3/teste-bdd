Feature: searching a name on the portal da transparencia

    Scenario: want to look up if someone with "José Pereira" in their name is on the portal da tranparencia
    Given access to the portal da transparencia
    When typed on the search bar for "José Pereira"
    And clicked on the search button
    Then should appear results of people with "José Pereira" in their names

