## cheer up path
* greet
  - utter_greet
* need_cheer_up
  - utter_cheer_up
  - utter_did_that_help
* affirm
  - utter_happy

## no cheer up path
* greet
  - utter_greet
* need_cheer_up
  - utter_cheer_up
  - utter_did_that_help
* deny
  - utter_sorry

## financial support path
* greet
  - utter_greet
* need_financial_support
  - utter_financial_support
  - utter_did_that_help
* affirm
  - utter_happy

## no financial support path
* greet
  - utter_greet
* need_financial_support
  - utter_financial_support
  - utter_did_that_help
* deny
  - utter_sorry

## proof path
* greet
  - utter_greet
* need_proof
  - utter_proof
  - utter_did_that_help
* affirm
  - utter_happy

## no proof path
* greet
  - utter_greet
* need_proof
  - utter_proof
  - utter_did_that_help
* deny
  - utter_sorry

## something else path
* greet
  - utter_greet
* need_something_else
  - utter_cant_help
  - utter_sorry

## say goodbye
* goodbye
  - utter_goodbye

## bot challenge
* bot_challenge
  - utter_iamabot
