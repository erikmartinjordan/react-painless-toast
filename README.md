# react-simple-toast

It displays a toast in the right top corner of the screen.

![Toast](https://media0.giphy.com/media/Tjov8Fpr1jYfujYAIz/giphy.gif)

## Installation

`npm i --save react-painless-toast`


## How to use it

Parameters to configure:

- `message` (string): Text to display.
- `seconds` (integer): Number of seconds to display the toast.
- `type`(string): 
    - `Ok`: display a toast with green border.
    - `Ko`: display a toast with red border. 


```jsx
import React from 'react';
import Toast from 'react-painless-toast';

function App() {
    
    return (
        <div className = 'App'>
            <Toast 
                message = {'Changes done succesfully!'} 
                seconds = {3} 
                type    = {'Ok'}
            />
        </div>
    );
}

export default App;
```

## Author

[Erik Martín](https://erikmartinjordan.com)

## License

This component is open source and available under the MIT License.