# react-bounce-ball-loader

A small loader with bouncing balls built using syled components.

## Import and Usage
```
import { BounceBallLoader } from 'react-bounce-ball-loader';
```
Example Usage:
```
const Component = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {isLoading && <BounceBallLoader />}
        </>
    );
}
```