# react-painless-toast

![react-simple-toast version](https://img.shields.io/npm/v/react-painless-toast)
![react-simple-toast license](https://img.shields.io/npm/l/react-painless-toast)

It displays a toast in the right top corner of the window.

![Toast](https://media2.giphy.com/media/eIfVTYYMEeQg3IP9vA/giphy.gif)

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
                message = {'Changes done successfully!'} 
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
