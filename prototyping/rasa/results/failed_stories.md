## sad path 1 (/tmp/tmpu3u9375d/4b381a9745b240e3a21343ecf92af3da_conversation_tests.md)
* greet: hello
    - utter_greet
* mood_unhappy: not good
    - utter_cheer_up   <!-- predicted: utter_happy -->
    - utter_did_that_help
* affirm: yes
    - utter_happy


## sad path 2 (/tmp/tmpu3u9375d/4b381a9745b240e3a21343ecf92af3da_conversation_tests.md)
* greet: hello
    - utter_greet
* mood_unhappy: not good
    - utter_cheer_up   <!-- predicted: utter_happy -->
    - utter_did_that_help
* deny: not really
    - utter_goodbye   <!-- predicted: utter_sorry -->


## sad path 3 (/tmp/tmpu3u9375d/4b381a9745b240e3a21343ecf92af3da_conversation_tests.md)
* greet: hi
    - utter_greet
* mood_unhappy: very terrible
    - utter_cheer_up   <!-- predicted: utter_happy -->
    - utter_did_that_help
* deny: no
    - utter_goodbye   <!-- predicted: utter_sorry -->


