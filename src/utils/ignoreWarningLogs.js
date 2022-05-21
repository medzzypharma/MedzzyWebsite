import {LogBox} from 'react-native';

export const ignoreWarningLogs = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'VirtualizedLists should never be nested',
    'Non-serializable values were found in the navigation state',
    'Clipboard has been extracted from react-native core and will be removed in a future release',
    "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.",
  ]);
};
