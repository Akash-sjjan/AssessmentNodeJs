const Assessment = [
  // React Native Questions start ////////////////////////////////////////////////////////////////////////////////////////////
  {
    question: "Which programming language is used in React Native development?",
    options: [
      "JavaScript",
      "Java",
      "TypeScript",
      "Both JavaScript and TypeScript can be used",
    ],
    correctAnswer: "Both JavaScript and TypeScript can be used",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "What platforms can React Native be used to develop applications for?",
    options: [
      "iOS only",
      "Android only",
      "Both iOS and Android",
      "Web browsers only",
    ],
    correctAnswer: "Both iOS and Android",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is the purpose of JSX in React Native?",
    options: [
      "It is a syntax extension for JavaScript that allows you to write HTML-like code",
      "It is a data storage format for React Native applications",
      "It is a styling system for React Native components",
      "It is a JavaScript package manager used in React Native projects",
    ],
    correctAnswer:
      "It is a syntax extension for JavaScript that allows you to write HTML-like code",
    code: "",
    type: "ReactNative",
  },
  {
    question: "Which of the following is NOT a core component in React Native?",
    options: ["View", "Text", "Image", "Button"],
    correctAnswer: "Button",
    code: "",
    type: "ReactNative",
  },
  {
    question: "How can you style a component in React Native?",
    options: [
      "Using inline styles",
      "Using CSS files",
      "Using JavaScript objects",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    code: "",
    type: "ReactNative",
  },
  {
    question: 'What is the purpose of the "state" in React Native?',
    options: [
      "It holds data that can be changed over time",
      "It defines the structure of a component's props",
      "It handles user input in React Native applications",
      "It is a lifecycle method that runs when a component is created or updated",
    ],
    correctAnswer: "It holds data that can be changed over time",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following is NOT a navigation library commonly used in React Native?",
    options: [
      "React Navigation",
      "React Native Navigation",
      "React Native Router",
      "React Router",
    ],
    correctAnswer: "React Native Router",
    code: "",
    type: "ReactNative",
  },
  {
    question: "How can you debug a React Native application?",
    options: [
      "Using console.log statements",
      "Using the React Native Debugger tool",
      "Using the Chrome Developer Tools",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    code: "",
    type: "ReactNative",
  },
  {
    question: "How can you access device-specific APIs in React Native?",
    options: [
      "By using platform-specific code",
      "By using third-party libraries",
      "By using the React Native API bridge",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    code: "",
    type: "ReactNative",
  },
  {
    question: 'What is the purpose of the "props" in React Native?',
    options: [
      "It holds data that can be changed over time",
      "It defines the structure of a component's state",
      "It handles user input in React Native applications",
      "It passes data from a parent component to a child component",
    ],
    correctAnswer:
      "It passes data from a parent component to a child component",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following methods is used to fetch data from an API in React Native?",
    options: [
      "componentDidMount()",
      "componentWillMount()",
      "componentDidUpdate()",
      "fetch()",
    ],
    correctAnswer: "fetch()",
    code: "",
    type: "ReactNative",
  },
  {
    question: 'What is the purpose of the "key" prop in React Native lists?',
    options: [
      "It helps in optimizing the rendering of list items",
      "It defines the unique identifier for each list item",
      "It specifies the styling for list items",
      "It determines the order in which list items are displayed",
    ],
    correctAnswer: "It helps in optimizing the rendering of list items",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "How can you handle user input events, such as button clicks, in React Native?",
    options: [
      "By using the onClick prop",
      "By using the onPress prop",
      "By using the onTouch event",
      "By using the handleInput function",
    ],
    correctAnswer: "By using the onPress prop",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following is NOT a valid React Native component lifecycle method?",
    options: [
      "componentDidMount()",
      "componentWillUpdate()",
      "componentDidUpdate()",
      "componentWillUnmount()",
    ],
    correctAnswer: "componentWillUpdate()",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      'What is the purpose of the "StyleSheet" component in React Native?',
    options: [
      "It is used to define the layout structure of a component",
      "It is used to handle asynchronous data fetching in React Native",
      "It is used to style React Native components",
      "It is used to manage the state of a React Native application",
    ],
    correctAnswer: "It is used to style React Native components",
    code: "",
    type: "ReactNative",
  },
  {
    question: 'What is the purpose of the "AsyncStorage" API in React Native?',
    options: [
      "It is used to store and retrieve data in a key-value format",
      "It is used to handle navigation in React Native applications",
      "It is used to make asynchronous HTTP requests in React Native",
      "It is used to handle user authentication in React Native",
    ],
    correctAnswer:
      "It is used to store and retrieve data in a key-value format",
    code: "",
    type: "ReactNative",
  },
  {
    question: 'What is the purpose of the "react-native-cli" package?',
    options: [
      "It is used to create a new React Native project",
      "It is used to compile React Native code to native code",
      "It is used to manage the dependencies of a React Native project",
      "It is used to generate documentation for React Native components",
    ],
    correctAnswer: "It is used to create a new React Native project",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following tools can be used for performance profiling of React Native applications?",
    options: [
      "React DevTools",
      "Redux DevTools",
      "Chrome Developer Tools",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following is NOT a valid data management library commonly used with React Native?",
    options: ["Redux", "MobX", "GraphQL", "Axios"],
    correctAnswer: "Axios",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      'What is the purpose of the "Touchable" components in React Native?',
    options: [
      "They provide a way to handle touch events in React Native applications",
      "They are used for styling text in React Native applications",
      "They handle navigation between screens in React Native applications",
      "They are used to display images in React Native applications",
    ],
    correctAnswer:
      "They provide a way to handle touch events in React Native applications",
    code: "",
    type: "ReactNative",
  },
  {
    question: "How can you perform layout positioning in React Native?",
    options: [
      "Using CSS Grid",
      "Using CSS Flexbox",
      "Using CSS Floats",
      "Using CSS Transitions",
    ],
    correctAnswer: "Using CSS Flexbox",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      'What is the purpose of the "FlatList" component in React Native?',
    options: [
      "It is used to render a list of items with custom components",
      "It is used to display images in a grid layout",
      "It is used to handle user authentication in React Native applications",
      "It is used to perform animations in React Native applications",
    ],
    correctAnswer:
      "It is used to render a list of items with custom components",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "How can you handle navigation between screens in a React Native application?",
    options: [
      'By using the "navigate" function from the React Navigation library',
      'By using the "fetch" function to retrieve screen data',
      'By using the "setState" function to update the current screen',
      'By using the "useEffect" hook to trigger navigation actions',
    ],
    correctAnswer:
      'By using the "navigate" function from the React Navigation library',
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following is NOT a valid method for handling forms in React Native?",
    options: [
      'Using the "Form" component from the React Native Elements library',
      'Using the "TextInput" component with event handlers',
      "Using third-party libraries like Formik or React Hook Form",
      'Using the "form" HTML element with React Native',
    ],
    correctAnswer: 'Using the "form" HTML element with React Native',
    code: "",
    type: "ReactNative",
  },
  {
    question:
      'What is the purpose of the "ActivityIndicator" component in React Native?',
    options: [
      "It is used to display a loading spinner or progress indicator",
      "It is used to handle touch events on a specific component",
      "It is used to play audio or video files in React Native applications",
      "It is used to animate transitions between screens",
    ],
    correctAnswer:
      "It is used to display a loading spinner or progress indicator",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which of the following is a valid method for handling network requests in React Native?",
    options: [
      'Using the built-in "fetch" function',
      'Using the "ajax" function from the jQuery library',
      'Using the "axios" library',
      "All of the above",
    ],
    correctAnswer: 'Using the built-in "fetch" function',
    code: "",
    type: "ReactNative",
  },

  {
    question: 'What is the purpose of the "Platform" module in React Native?',
    options: [
      "It provides information about the user's device platform (e.g., iOS or Android)",
      "It handles routing and navigation between screens in React Native applications",
      "It provides access to device-specific APIs and functionalities",
      "It allows developers to create platform-specific code for iOS and Android",
    ],
    correctAnswer:
      "It provides information about the user's device platform (e.g., iOS or Android)",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      'What is the purpose of the "SafeAreaView" component in React Native?',
    options: [
      "It is used to create a safe area for content to be displayed within the device's screen boundaries",
      "It is used to secure user authentication in React Native applications",
      "It is used to handle touch events on specific components",
      "It is used to display alerts or notifications in React Native applications",
    ],
    correctAnswer:
      "It is used to create a safe area for content to be displayed within the device's screen boundaries",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is platform.OS?",
    options: [
      "Platform.OS will be ios when running on iOS and android when running on Android.",
      "Platform.OS will be only ios when running on iOS",
      "Platform.OS will be ios when running on iOS, android when running on Android and web when running on the web.",
    ],
    correctAnswer:
      "Platform.OS will be ios when running on iOS, android when running on Android and web when running on the web.",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is ScrollView?",
    options: [
      "generic scrolling container that can contain multiple components and views.",
      "component of React Native for building a user interface",
      "structured data in a scrollable list",
    ],
    correctAnswer:
      "generic scrolling container that can contain multiple components and views.",
    code: "",
    type: "ReactNative",
  },
  {
    question: "UI, JavaScript and Background thread is present in ?",
    options: ["Flatlist", "View Flattening", "React Native Renderer"],
    correctAnswer: "React Native Renderer",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which algorithm is used for optimization by the React Native renderer to avoid deep layout trees.",
    options: ["React Native renderer", "View Flattening", "Fabric"],
    correctAnswer: "View Flattening",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is getColorScheme()?",
    options: [
      "Indicates the current user preferred color scheme",
      "event handler that is fired when appearance preferences change.",
      "exposes information about the user's appearance preferences.",
    ],
    correctAnswer: "Indicates the current user preferred color scheme",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is the flatten() method?",
    options: [
      "used to lookup IDs, returned by StyleSheet.register",
      "Creates a StyleSheet style reference from the given object.",
      "Combines two styles",
    ],
    correctAnswer: "used to lookup IDs, returned by StyleSheet.register",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Which below code can be used to get dimension of application window:",
    options: [
      "const windowWidth = Dimensions.Set('window').width;const windowHeight = Dimensions.Set('window').height;",
      "const windowWidth = Dimensions.get('window').width;const windowHeight = Dimensions.get('window').height;",
    ],
    correctAnswer:
      "const windowWidth = Dimensions.get('window').width;const windowHeight = Dimensions.get('window').height;",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What are the components of redux:",
    options: [
      "Action, Reducer, state",
      "Action, view, state",
      "View, state, Reducer",
    ],
    correctAnswer: "Action, Reducer, state",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is serialized JSON?",
    options: [
      "Used to transfer data between JavaScript and host platform",
      "Used to keep consistency among different platforms.",
      "Host components are lazily initialized by default",
    ],
    correctAnswer: "Used to transfer data between JavaScript and host platform",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "To fetch content from an arbitrary URL, which optional second HTTP Method argument is used?",
    options: ["PUT", "DELETE", "POST", "GET"],
    correctAnswer: "POST",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is Deep Linking?",
    options: [
      "Which allows you to get near-instant feedback for changes in your React components.",
      "Way of sending data directly to a native application from an outside source",
      "Which allows to map a transformed file back to the original source file",
    ],
    correctAnswer:
      "Way of sending data directly to a native application from an outside source",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "Is React Native UI Kitten part of React Native Component library?",
    options: ["Yes", "No"],
    correctAnswer: "Yes",
    code: "",
    type: "ReactNative",
  },
  {
    question: "What is AppState?",
    options: [
      "Informs if the app is in the foreground or background, and notify you when the state changes.",
      "Is JS entry point to running all React Native apps",
      "exposes methods for customizing settings for developers in development.",
    ],
    correctAnswer:
      "Informs if the app is in the foreground or background, and notify you when the state changes.",
    code: "",
    type: "ReactNative",
  },

  {
    question: "________is used to create immutable stylesheet references",
    options: ["none", "stylesheet", "Interaction manager", "Redux"],
    correctAnswer: "stylesheet",
    code: "",
    type: "ReactNative",
  },
  {
    question:
      "To update react native with the latest version what will you use?",
    options: ["none", "both", "react-native upgrade", "react-native init"],
    correctAnswer: "react-native upgrade",
    code: "",
    type: "ReactNative",
  },
  {
    question: "Select apps which use react native .",
    options: ["All", "Instagram", "pinterest", "Airbnb"],
    correctAnswer: "All",
    code: "",
    type: "ReactNative",
  },
  {
    question: "React native was initially released in",
    options: ["2000", "2014", "2015", "2008"],
    correctAnswer: "2015",
    code: "",
    type: "ReactNative",
  },
  {
    question: "Virtual DOM creates a copy of the whole DOM object",
    options: ["TRUE", "FALSE"],
    correctAnswer: "FALSE",
    code: "",
    type: "ReactNative",
  },
  {
    question: "Props are immutable. True or False?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE",
    code: "",
    type: "ReactNative",
  },
  {
    question: "Which statement is true for props?",
    options: [
      "it is set and updated by the object",
      "it is mutual",
      "can be modified",
      "can't be modified",
    ],
    correctAnswer: "can't be modified",
    code: "",
    type: "ReactNative",
  },
  // React Native Code questions start ////////////////////////////////////////////////////////////////////////////////////////////
  {
    question:
      "Consider the following code snippet:\n Which method can be used to change the state of counter?",
    options: [
      "this.state.counter = 5",
      "this.state.counter++",
      "this.setState({ counter: 5 })",
      "this.props.counter = 5",
    ],
    correctAnswer: "this.setState({ counter: 5 })",
    code: `class MyApp extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            counter: 0
          };
        }
        // ...
      }`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What does the 'flex: 1'in the 'styles' do?",
    options: [
      "Sets the width of the container",
      "Sets the height of the container",
      "Makes the container take up all available space in its parent",
      "Centers the container in its parent",
    ],
    correctAnswer:
      "Makes the container take up all available space in its parent",
    code: `import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    
    export default function App() {
      return (
        <View style={styles.container}>
          <Text>Hello, React Native!</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What does the 'TouchableOpacity' component do in this snippet?",
    options: [
      "Changes the opacity of the wrapped component when touched",
      "Provides a clickable area",
      "Both A and B",
      "None of the above",
    ],
    correctAnswer: "Both A and B",
    code: `<TouchableOpacity onPress={() => console.log('Pressed')}>
    <Text>Press Me</Text>
  </TouchableOpacity>`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What is the purpose of the keyExtractor prop in a FlatList in React Native?",
    options: [
      "It uniquely identifies each element",
      "It helps in the process of diffing and re-rendering",
      "It is used to sort the list",
      "Both A and B",
    ],
    correctAnswer: "Both A and B",
    code: `<FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n In the snippet above, what does flexDirection: 'column' do?",
    options: [
      "Arranges the items horizontally",
      "Arranges the items vertically",
      "Centers the items",
      "Justifies the items",
    ],
    correctAnswer: "Arranges the items vertically",
    code: `<View style={{ flexDirection: 'column' }}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </View>`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What does onChangeText do in this snippet?",
    options: [
      "It sets the value of 'TextInput' to the state",
      "It changes the state whenever 'TextInput' changes",
      "It changes the value of 'TextInput' whenever the state changes",
      "It updates the UI whenever the state changes",
    ],
    correctAnswer: "It changes the state whenever 'TextInput' changes",
    code: `<TextInput onChangeText={(text) => this.setState({input: text})} />`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What is the correct way to update the 'name' property of the state object, without altering the 'age' property?",
    options: [
      `setState({ name: "Doe" })`,
      `setState({ name: "Doe", age: state.age })`,
      `setState(prevState => ({ ...prevState, name: "Doe" }))`,
      `setState({ ...state, name: "Doe" })`,
    ],
    correctAnswer: `setState(prevState => ({ ...prevState, name: "Doe" }))`,
    code: `const [state, setState] = React.useState({ name: "John", age: 30 });`,
    type: "ReactNative",
  },
  {
    question: `Consider the following code snippet:\n What does 'barStyle="light-content"' do in this StatusBar component?`,
    options: [
      "Changes the color of the status bar text to light",
      "Changes the color of the status bar to light",
      "Changes the color of the status bar text to dark",
      "Changes the color of the status bar to dark",
    ],
    correctAnswer: "Changes the color of the status bar text to light",
    code: `import { StatusBar } from 'react-native';

    <StatusBar backgroundColor="blue" barStyle="light-content" />
    `,
    type: "ReactNative",
  },
  {
    question: `Consider the following code snippet:\n When will the "Cleanup function" message be logged to the console?`,
    options: [
      "When the component is first mounted",
      "After every render",
      "When the component is updated",
      "When the component is unmounted",
    ],
    correctAnswer: "When the component is unmounted",
    code: `useEffect(() => {
      console.log('Effect executed');
    
      return () => {
        console.log('Cleanup function');
      }
    }, []);`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What is the purpose of useCallback in this case?",
    options: [
      "To prevent the function from being recreated on every render",
      "To execute the function only when the component first renders",
      "To delay the execution of the function until the next render",
      "To run the function as a side effect of a state or props change",
    ],
    correctAnswer:
      "To prevent the function from being recreated on every render",
    code: `const handler = useCallback(() => {
      console.log('Button clicked');
    }, []);`,
    type: "ReactNative",
  },
  {
    question:
      "Consider the following code snippet:\n What does Alert.alert do in this snippet?",
    options: [
      "It creates a new button with the label 'You tapped the button!'",
      "It changes the button's title to 'You tapped the button!' when the button is pressed",
      "It displays an alert dialog with the message 'You tapped the button!' when the button is pressed",
      "It logs the message 'You tapped the button!' to the console when the button is pressed",
    ],
    correctAnswer:
      "It displays an alert dialog with the message 'You tapped the button!' when the button is pressed",
    code: `<Button
    onPress={() => {
      Alert.alert('You tapped the button!');
    }}
    title="Press Me"
  />`,
    type: "ReactNative",
  },
  // Typescript Questions start ////////////////////////////////////////////////////////////////////////////////////////////
  {
    question: "TypeScript is a:",
    options: [
      "Superset of JavaScript",
      "Subset of JavaScript",
      "Alternative to JavaScript",
      "A different programming language altogether",
    ],
    correctAnswer: "Superset of JavaScript",
    code: "",
    type: "TypeScript",
  },
  {
    question: "TypeScript provides which of the following benefits?",
    options: [
      "Static typing",
      "Improved tooling and IDE support",
      "Enhanced code maintainability",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    code: "",
    type: "TypeScript",
  },
  {
    question: "TypeScript code is compiled into:",
    options: ["Machine code", "Bytecode", "JavaScript", "Assembly language"],
    correctAnswer: "JavaScript",
    code: "",
    type: "TypeScript",
  },
  {
    question: "What is the file extension for TypeScript files?",
    options: [".ts", ".js", ".txt", ".html"],
    correctAnswer: ".ts",
    code: "",
    type: "TypeScript",
  },
  {
    question: "Which of the following is true about TypeScript interfaces?",
    options: [
      "Interfaces are optional in TypeScript.",
      "Interfaces are used to define the structure of a class or object.",
      "Interfaces are only applicable to functions.",
      "Interfaces are only used for styling purposes.",
    ],
    correctAnswer:
      "Interfaces are used to define the structure of a class or object.",
    code: "",
    type: "TypeScript",
  },
  {
    question: "TypeScript supports which type of modules?",
    options: [
      "ES5 modules",
      "CommonJS modules",
      "AMD modules",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    code: "",
    type: "TypeScript",
  },
  {
    question: 'In TypeScript, what is the purpose of the "readonly" modifier?',
    options: [
      "It restricts the modification of a variable or property after initialization.",
      "It enforces a property to be initialized.",
      "It makes a variable or property accessible from any scope.",
      "It defines a variable or property as constant.",
    ],
    correctAnswer:
      "It restricts the modification of a variable or property after initialization.",
    code: "",
    type: "TypeScript",
  },
  {
    question: "TypeScript supports which of the following inheritance models?",
    options: [
      "Single inheritance",
      "Multiple inheritance",
      "Hybrid inheritance",
      "None of the above",
    ],
    correctAnswer: "Single inheritance",
    code: "",
    type: "TypeScript",
  },
  {
    question:
      "Which TypeScript feature allows you to specify the types of multiple parameters and the return type of a function?",
    options: ["Type assertions", "Type aliases", "Generics", "Function types"],
    correctAnswer: "Function types",
    code: "",
    type: "TypeScript",
  },
  {
    question: 'What is the purpose of the "namespace" keyword in TypeScript?',
    options: [
      "It creates a new variable scope within a function.",
      "It defines a group of related functionalities or objects.",
      "It is used to import external modules in TypeScript.",
      "It declares a new TypeScript project.",
    ],
    correctAnswer: "It defines a group of related functionalities or objects.",
    code: "",
    type: "TypeScript",
  },
  {
    question:
      "TypeScript provides which mechanism for achieving code reuse and encapsulation?",
    options: [
      "Classes and objects",
      "Modules and namespaces",
      "Functions and closures",
      "Promises and async/await",
    ],
    correctAnswer: "Modules and namespaces",
    code: "",
    type: "TypeScript",
  },
  {
    question: "What is Super () in typescript?",
    options: [
      "To access the base class constructor from the child class",
      "Refers to methods, static and instance variables",
      "utility type which is used to create a new custom Type",
    ],
    correctAnswer: "To access the base class constructor from the child class",
    code: "",
    type: "TypeScript",
  },
  // ReactJs Questions start ////////////////////////////////////////////////////////////////////////////////////////////
  {
    question: "What is JSX in ReactJS?",
    options: [
      "A JavaScript extension for XML",
      "A templating language for server-side rendering",
      "A CSS preprocessor",
      "A package manager for ReactJS",
    ],
    correctAnswer: "A JavaScript extension for XML",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the virtual DOM in ReactJS?",
    options: [
      "A representation of the actual HTML DOM in memory",
      "A lightweight version of the DOM for mobile devices",
      "A JavaScript library for handling AJAX requests",
      "A set of utility functions for manipulating DOM elements",
    ],
    correctAnswer: "A representation of the actual HTML DOM in memory",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'render' method in ReactJS?",
    options: [
      "To define the initial state of a component",
      "To update the state of a component",
      "To handle user input and trigger component updates",
      "To render the component's UI based on its current state",
    ],
    correctAnswer: "To render the component's UI based on its current state",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is a state in ReactJS?",
    options: [
      "A set of predefined CSS styles",
      "A function that returns HTML elements",
      "A JavaScript object that stores data for a component",
      "A lifecycle method that is automatically invoked by ReactJS",
    ],
    correctAnswer: "A JavaScript object that stores data for a component",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'props' in ReactJS?",
    options: [
      "To define the CSS styles for a component",
      "To pass data from a parent component to a child component",
      "To handle user input events in a component",
      "To specify the routing configuration for a React application",
    ],
    correctAnswer: "To pass data from a parent component to a child component",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the difference between 'controlled' and 'uncontrolled' components in ReactJS?",
    options: [
      "Controlled components are written in JSX, while uncontrolled components use plain JavaScript",
      "Controlled components manage their own state, while uncontrolled components rely on external sources of truth",
      "Controlled components provide better performance, while uncontrolled components are easier to develop",
      "Controlled components are rendered on the server, while uncontrolled components are rendered on the client",
    ],
    correctAnswer:
      "Controlled components manage their own state, while uncontrolled components rely on external sources of truth",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'key' prop in ReactJS?",
    options: [
      "It is used to define the initial state of a component",
      "It is used to uniquely identify elements in an array of components",
      "It is used to handle user input events in a component",
      "It is used to specify the default props for a component",
    ],
    correctAnswer:
      "It is used to uniquely identify elements in an array of components",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the role of the 'componentDidMount' lifecycle method in ReactJS?",
    options: [
      "It is invoked when a component is about to be removed from the DOM",
      "It is invoked after a component's render method has been called",
      "It is invoked before a component's render method is called",
      "It is invoked when a component's state or props are updated",
    ],
    correctAnswer:
      "It is invoked after a component's render method has been called",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of React Router in ReactJS?",
    options: [
      "It is used to manage the state of a React component",
      "It is used to handle AJAX requests in a React application",
      "It is used to provide client-side routing in a single-page application",
      "It is used to style React components using CSS-in-JS",
    ],
    correctAnswer:
      "It is used to provide client-side routing in a single-page application",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'setState' method in ReactJS?",
    options: [
      "To update the props of a component",
      "To modify the state of a component",
      "To define the lifecycle methods of a component",
      "To handle routing in a React application",
    ],
    correctAnswer: "To modify the state of a component",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the significance of the 'shouldComponentUpdate' method in ReactJS?",
    options: [
      "It determines whether a component should be rendered or not",
      "It defines the initial state of a component",
      "It handles the rendering of child components",
      "It triggers an update in the parent component",
    ],
    correctAnswer:
      "It determines whether a component should be rendered or not",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the difference between functional components and class components in ReactJS?",
    options: [
      "Functional components are written in JSX, while class components are written in plain JavaScript",
      "Functional components are stateless, while class components can have state and lifecycle methods",
      "Functional components are more performant than class components",
      "Functional components can only be used for simple UI rendering, while class components are used for complex logic",
    ],
    correctAnswer:
      "Functional components are stateless, while class components can have state and lifecycle methods",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "How can you pass data from a child component to a parent component in ReactJS?",
    options: [
      "By using the 'props' mechanism",
      "By using the 'state' mechanism",
      "By directly modifying the parent component's state",
      "By using the 'context' API",
    ],
    correctAnswer: "By using the 'props' mechanism",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the purpose of the 'componentWillUnmount' lifecycle method in ReactJS?",
    options: [
      "It is invoked when a component is about to be removed from the DOM",
      "It is invoked after a component's render method has been called",
      "It is invoked before a component's render method is called",
      "It is invoked when a component's state or props are updated",
    ],
    correctAnswer:
      "It is invoked when a component is about to be removed from the DOM",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'Fragment' component in ReactJS?",
    options: [
      "It is used to define reusable component logic",
      "It is used to handle asynchronous operations in a component",
      "It is used to group multiple elements without adding extra nodes to the DOM",
      "It is used to handle form input validation in a component",
    ],
    correctAnswer:
      "It is used to group multiple elements without adding extra nodes to the DOM",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the purpose of the 'React Developer Tools' browser extension?",
    options: [
      "It is used to write React code in the browser",
      "It is used to debug React components and inspect the component hierarchy",
      "It is used to optimize the performance of React applications",
      "It is used to automatically generate documentation for React components",
    ],
    correctAnswer:
      "It is used to debug React components and inspect the component hierarchy",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'React.Fragment' syntax in JSX?",
    options: [
      "It is used to define reusable component logic",
      "It is used to handle asynchronous operations in a component",
      "It is used to group multiple elements without adding extra nodes to the DOM",
      "It is used to handle form input validation in a component",
    ],
    correctAnswer:
      "It is used to group multiple elements without adding extra nodes to the DOM",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the purpose of the 'React.memo' higher-order component in ReactJS?",
    options: [
      "It is used to memoize the results of expensive calculations in a component",
      "It is used to handle component composition in React",
      "It is used to handle state management in React",
      "It is used to optimize the rendering performance of a component",
    ],
    correctAnswer:
      "It is used to optimize the rendering performance of a component",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of the 'useEffect' hook in ReactJS?",
    options: [
      "It is used to define the initial state of a functional component",
      "It is used to handle user input events in a functional component",
      "It is used to manage side effects and perform cleanup operations in a functional component",
      "It is used to define the lifecycle methods of a functional component",
    ],
    correctAnswer:
      "It is used to manage side effects and perform cleanup operations in a functional component",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is Webpack?",
    options: [
      "A JavaScript framework for building user interfaces",
      "A package manager for managing dependencies in a project",
      "A task runner for automating build processes",
      "A module bundler for bundling JavaScript and other assets",
    ],
    correctAnswer: "A module bundler for bundling JavaScript and other assets",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "When using React.lazy() to import a component, how should it be rendered?",
    options: [
      "By using the <React.lazy> component in the JSX markup",
      "By calling the React.lazy() function directly in the render method",
      "By wrapping it with the <Suspense> component and specifying a fallback",
      "By using the React.renderLazyComponent() function provided by React",
    ],
    correctAnswer:
      "By wrapping it with the <Suspense> component and specifying a fallback",
    code: "",
    type: "ReactJs",
  },
  {
    question: "How are hooks called in React?",
    options: [
      "They are called directly as function invocations within functional components.",
      "They are called using this keyword within class components.",
      "They are called using the use prefix, followed by the name of the hook (e.g., useEffect).",
      "They are called using the React.use prefix, followed by the name of the hook (e.g., React.useEffect).",
    ],
    correctAnswer:
      "They are called directly as function invocations within functional components.",
    code: "",
    type: "ReactJs",
  },

  {
    question: "What is a brute force attack in the context of React?",
    options: [
      "A technique for optimizing the performance of React components.",
      "A method for testing the security of React applications.",
      "A malicious attempt to gain unauthorized access by systematically trying all possible combinations of inputs.",
      "A strategy for handling large amounts of data in React state management.",
    ],
    correctAnswer:
      "A malicious attempt to gain unauthorized access by systematically trying all possible combinations of inputs.",
    code: "",
    type: "ReactJs",
  },

  {
    question: "What is a synthetic event in React?",
    options: [
      "An event that is generated by the browser's native event system and passed to React components.",
      "An artificial event created by React to handle user interactions in a cross-browser compatible way.",
      "An event triggered by React components to communicate with the underlying DOM.",
      "An event that is exclusively used in React for handling form submissions.",
    ],
    correctAnswer:
      "An artificial event created by React to handle user interactions in a cross-browser compatible way.",
    code: "",
    type: "ReactJs",
  },

  {
    question:
      "In ReactJS, which method is used to render JSX within a component?",
    options: ["renderJSX()", "render()", "renderJS()", "JSX()"],
    correctAnswer: "render()",
    code: "",
    type: "ReactJs",
  },

  {
    question: "How do you conditionally render components in ReactJS?",
    options: [
      "Using the if-else statements within the JSX markup.",
      "Using the for loop to iterate over an array of components.",
      "Using the switch statement to select the appropriate component.",
      "Using JavaScript expressions or ternary operators within the JSX markup.",
    ],
    correctAnswer:
      "Using JavaScript expressions or ternary operators within the JSX markup.",
    code: "",
    type: "ReactJs",
  },

  {
    question:
      "How can you pass data from a parent component to a child component in ReactJS?",
    options: [
      "By using the parentData attribute within the child component.",
      "By using the sendData method to pass data from parent to child.",
      "By using the props mechanism to pass data as attributes.",
      "By directly accessing the parent component's state from the child component.",
    ],
    correctAnswer: "By using the props mechanism to pass data as attributes.",
    code: "",
    type: "ReactJs",
  },

  {
    question: "What is the purpose of the useState hook in ReactJS?",
    options: [
      "It is used to define the initial state of a functional component.",
      "It is used to handle user input events in a functional component.",
      "It is used to manage side effects and perform cleanup operations in a functional component.",
      "It is used to update the state of a functional component.",
    ],
    correctAnswer: "It is used to update the state of a functional component.",
    code: "",
    type: "ReactJs",
  },

  {
    question:
      "How can you perform side effects in ReactJS functional components?",
    options: [
      "By using the useEffect hook.",
      "By defining custom lifecycle methods within functional components.",
      "By utilizing the useEffect method within a class component.",
      "By directly modifying the DOM within the functional component.",
    ],
    correctAnswer: "By using the useEffect hook.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "Numeric enums in React can be useful for:",
    options: [
      "Defining a set of constant values with string representations.",
      "Assigning unique identifiers to React components.",
      "Providing a way to represent a range of numerical values.",
      "Mapping numerical values to corresponding labels or descriptions.",
    ],
    correctAnswer:
      "Mapping numerical values to corresponding labels or descriptions.",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "In React, which method is used to update the state of a component?",
    options: ["setState()", "updateState()", "changeState()", "modifyState()"],
    correctAnswer: "setState()",
    code: "",
    type: "ReactJs",
  },
  {
    question: "When does a React component re-render?",
    options: [
      "Whenever the state or props of the component change.",
      "Only when the state of the component changes.",
      "Only when the props of the component change.",
      "React components never re-render.",
    ],
    correctAnswer: "Whenever the state or props of the component change.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of ReactDOMServer in React?",
    options: [
      "It is used to render React components on the server-side.",
      "It is used to manipulate the DOM directly in React components.",
      "It is used to manage the state and lifecycle methods of React components.",
      "It is used to define the routing and navigation in React applications.",
    ],
    correctAnswer: "It is used to render React components on the server-side.",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What is the difference between React.PureComponent and a regular React.Component?",
    options: [
      "React.PureComponent can only be used for class components, while React.Component can be used for both class and functional components.",
      "React.PureComponent automatically implements the shouldComponentUpdate method with a shallow prop and state comparison, while React.Component does not.",
      "React.PureComponent is used for rendering pure HTML elements, while React.Component is used for rendering complex UI components.",
      "There is no difference between React.PureComponent and React.Component.",
    ],
    correctAnswer:
      "React.PureComponent automatically implements the shouldComponentUpdate method with a shallow prop and state comparison, while React.Component does not.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of React.Fragment in React?",
    options: [
      "It is used to create a reusable piece of UI code.",
      "It is used to define and manage the state of a component.",
      "It is used to conditionally render components based on a specific condition.",
      "It is used to wrap multiple elements without adding an extra DOM element to the rendered output.",
    ],
    correctAnswer:
      "It is used to wrap multiple elements without adding an extra DOM element to the rendered output.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is a Higher Order Component (HOC) in React?",
    options: [
      "A component that is rendered at the top of the component tree.",
      "A component that receives props and returns a new enhanced component.",
      "A component that is used to handle user interactions and events.",
      "A component that renders the UI based on the application's state.",
    ],
    correctAnswer:
      "A component that receives props and returns a new enhanced component.",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "Which React hook is used to manage state and perform side effects in functional components?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    correctAnswer: "useState",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is data binding in React?",
    options: [
      "The process of binding data from a component's state to its rendered output.",
      "The process of connecting a React component to a database.",
      "The process of passing data between parent and child components using props.",
      "The process of dynamically updating the UI based on user input.",
    ],
    correctAnswer:
      "The process of binding data from a component's state to its rendered output.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of a reducer function in React?",
    options: [
      "It is used to define the initial state of a component.",
      "It is used to handle user input events and update the component's state.",
      "It is used to manage complex state logic in a predictable way.",
      "It is used to map actions to corresponding state changes.",
    ],
    correctAnswer:
      "It is used to manage complex state logic in a predictable way.",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "Which React hook is used to manage complex state and actions using a reducer function?",
    options: ["useReducer", "useState", "useEffect", "useContext"],
    correctAnswer: "useReducer",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is an Error Boundary in React?",
    options: [
      "A component that catches JavaScript errors during rendering.",
      "A boundary that prevents errors from occurring in React applications.",
      "A boundary that separates UI components from state management.",
      "A component that is rendered when there is an error in the application.",
    ],
    correctAnswer:
      "A component that catches JavaScript errors during rendering.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of accessibility (a11y) in React Web Pages?",
    options: [
      "To enhance the performance of React components.",
      "To improve the search engine optimization (SEO) of React applications.",
      "To ensure that React components are compatible with different browsers.",
      "To make React web pages more usable and accessible for users with disabilities.",
    ],
    correctAnswer:
      "To make React web pages more usable and accessible for users with disabilities.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the Context API in React?",
    options: [
      "A mechanism for passing props from a parent component to its child components.",
      "An API that enables communication between React components using events.",
      "A way to manage global state in React applications without prop drilling.",
      "An API for handling errors and exceptions in React applications.",
    ],
    correctAnswer:
      "A way to manage global state in React applications without prop drilling.",
    code: "",
    type: "ReactJs",
  },
  {
    question: "What is the purpose of debounce in React?",
    options: [
      "To delay the execution of a function until a certain amount of time has passed without further calls.",
      "To optimize the rendering performance of React components.",
      "To control the timing and sequence of state updates in React applications.",
      "To handle errors and exceptions in React applications.",
    ],
    correctAnswer:
      "To delay the execution of a function until a certain amount of time has passed without further calls.",
    code: "",
    type: "ReactJs",
  },
  {
    question:
      "What does Cumulative Layout Shift (CLS) measure in web development?",
    options: [
      "The time it takes to load a web page and its resources.",
      "The visual stability of a web page during the loading and rendering process.",
      "The size of a web page and its contents in bytes.",
      "The responsiveness and interactivity of a web page.",
    ],
    correctAnswer:
      "The visual stability of a web page during the loading and rendering process.",
    code: "",
    type: "ReactJs",
  },
  // JavaScript Questions start ////////////////////////////////////////////////////////////////////////////////////////////
  {
    question: "How can you declare a variable in JavaScript?",
    options: [
      `var myVariable = "Hello";`,
      `myVariable == "Hello";`,
      `myVariable: "Hello";`,
      `myVariable :: "Hello";`,
    ],
    correctAnswer: `var myVariable = "Hello";`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `What is the correct syntax for referring to an external script called "app.js"?`,
    options: [
      `<script href="app.js">`,
      `<script name="app.js">`,
      `<script src="app.js">`,
      `<script file="app.js">`,
    ],
    correctAnswer: `<script src="app.js">`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `Which JavaScript method removes the last element from an array and returns that element?`,
    options: [`.pop()`, `.push()`, `.shift()`, `.unshift()`],
    correctAnswer: `.pop()`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `What does JSON stand for in JavaScript?`,
    options: [
      `JavaScript Object Notation`,
      `JavaScript Operation Number`,
      `JavaScript Optional Notation`,
      `Just Simple Object Notation`,
    ],
    correctAnswer: `JavaScript Object Notation`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `How do you declare a JavaScript object?`,
    options: [
      `var obj = { key: 'value' };`,
      `var obj = ( key: 'value' );`,
      `var obj = [ key: 'value' ];`,
      `var obj = < key: 'value' >;`,
    ],
    correctAnswer: `var obj = { key: 'value' };`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `Which of the following is not a valid JavaScript data type?`,
    options: [`Undefined`, `Null`, `Number`, `Character`],
    correctAnswer: `Character`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `How do you find the length of a string in JavaScript?`,
    options: [
      `string.length()`,
      `string.len()`,
      `string.size()`,
      `string.length`,
    ],
    correctAnswer: `string.length`,
    code: ``,
    type: "JavaScript",
  },
  {
    question: `Which of the following correctly creates an instance of a date in JavaScript?`,
    options: [
      `var date = new Date()`,
      `var date = Date()`,
      `var date = new Date`,
      `var date = Date.new()`,
    ],
    correctAnswer: `var date = new Date()`,
    code: ``,
    type: "JavaScript",
  },
  // ReactJs Coding Questions start ////////////////////////////////////////////////////////////////////////////////////////////
  {
    question: `What does the Greeting component render?`,
    options: [
      `A heading element with the text "Hello, {name}!"`,
      `A paragraph element with the text "Welcome to the website."`,
      `Both a heading element and a paragraph element.`,
      `Nothing, as the component is not used anywhere.`,
    ],
    code: `import React from 'react';

const Greeting = ({ name }) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Welcome to the website.</p>
  </div>
);

export default Greeting;`,
    correctAnswer: `Both a heading element and a paragraph element.`,
    type: "ReactJs",
  },
  {
    question: `What is the output of the above code?`,
    options: [
      `The output will be "Hello, React!".`,
      `The output will be "Goodbye, React!".`,
      `The output will be an empty div element.`,
      `The code will result in an error.`,
    ],
    code: `const App = () => (
  <div>
    {true && <p>Hello, React!</p>}
    {false && <p>Goodbye, React!</p>}
  </div>
);`,
    correctAnswer: `The output will be "Hello, React!".`,
    type: "ReactJs",
  },
  {
    question: `What will be the output of the above code?`,
    options: [
      `"React App"`,
      `10`,
      `The code will result in an error.`,
      `Both "10" and "React App".`,
    ],
    code: `const number = 10;

const App = () => {
  console.log(number);
  return <div>React App</div>;
};`,
    correctAnswer: `10`,
    type: "ReactJs",
  },
  {
    question: `What is the output of the following code?`,
    options: [`"react"`, `"angular"`, `"vue"`, `"svelte"`],
    code: `console.log("react" && "angular" && "vue" && "svelte");`,
    correctAnswer: `"svelte"`,
    type: "ReactJs",
  },
  {
    question: `What is the output of the following code?`,
    options: [`null`, `undefined`, `false`, `true`, `0`, `"react"`],
    code: `console.log(null || undefined || false || true || 0 || "react");`,
    correctAnswer: `true`,
    type: "ReactJs",
  },
  // Ruby on Rails Questions //////////////////////////////////////////////////////////////////////////////////////////////////
  {
    question: `What is the command to create a new Rails application?`,
    options: [
      `rails new app_name`,
      `new rails app_name`,
      `create rails app_name`,
      `app_name new rails`,
    ],
    code: ``,
    correctAnswer: `rails new app_name`,
    type: `Ruby`,
  },
  {
    question: `What is the default database used in a new Rails application?`,
    options: [`MySQL`, `PostgreSQL`, `SQLite`, `MongoDB`],
    code: ``,
    correctAnswer: `SQLite`,
    type: `Ruby`,
  },
  {
    question: `Which directory contains the models in a Rails application?`,
    options: [`app/controllers`, `app/views`, `app/models`, `app/helpers`],
    code: ``,
    correctAnswer: `app/models`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of migrations in Rails?`,
    options: [
      `To create the database schema`,
      `To handle user authentication`,
      `To manage the application's routes`,
      `To store static assets like CSS and JavaScript`,
    ],
    code: ``,
    correctAnswer: `To create the database schema`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to run database migrations in Rails?`,
    options: [
      `rails migrate`,
      `rake db:migrate`,
      `rails db:migrate`,
      `rake migrate:db`,
    ],
    code: ``,
    correctAnswer: `rake db:migrate`,
    type: `Ruby`,
  },
  {
    question: `Which file is used to define the routes in a Rails application?`,
    options: [`routes.rb`, `application.rb`, `routes.yml`, `config.rb`],
    code: ``,
    correctAnswer: `routes.rb`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails asset pipeline?`,
    options: [
      `To optimize database queries`,
      `To manage user authentication`,
      `To compile and serve static assets`,
      `To handle background jobs`,
    ],
    code: ``,
    correctAnswer: `To compile and serve static assets`,
    type: `Ruby`,
  },
  {
    question: `Which command starts the Rails development server?`,
    options: [
      `rails server`,
      `server rails`,
      `start rails server`,
      `rails start`,
    ],
    code: ``,
    correctAnswer: `rails server`,
    type: `Ruby`,
  },
  {
    question: `What is the convention for naming a controller in Rails?`,
    options: [
      `Singular form (e.g., UserController)`,
      `Plural form (e.g., UsersController)`,
      `CamelCase format (e.g., User_Controller)`,
      `Snake_case format (e.g., user_controller)`,
    ],
    code: ``,
    correctAnswer: `Plural form (e.g., UsersController)`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to generate a new Rails controller?`,
    options: [
      `rails generate controller`,
      `rake new controller`,
      `generate rails controller`,
      `controller new rails`,
    ],
    code: ``,
    correctAnswer: `rails generate controller`,
    type: `Ruby`,
  },
  {
    question: `In Rails, which file is responsible for defining the database connection configuration?`,
    options: [
      `config/initializers/database.rb`,
      `config/database.yml`,
      `db/connections.rb`,
      `app/config/database.rb`,
    ],
    code: ``,
    correctAnswer: `config/database.yml`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails scaffold generator?`,
    options: [
      `To generate a basic CRUD interface for a resource`,
      `To generate a new Rails application structure`,
      `To generate database migrations`,
      `To generate models with associations`,
    ],
    code: ``,
    correctAnswer: `To generate a basic CRUD interface for a resource`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to generate a migration file?`,
    options: [
      `rails new_migration`,
      `rake db:new_migration`,
      `rails generate migration`,
      `migration generate rails`,
    ],
    code: ``,
    correctAnswer: `rails generate migration`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails console?`,
    options: [
      `To run automated tests`,
      `To interact with the application's database and models`,
      `To deploy the Rails application to a production server`,
      `To generate API documentation`,
    ],
    code: ``,
    correctAnswer: `To interact with the application's database and models`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the "strong parameters" feature in Rails?`,
    options: [
      `To secure user authentication`,
      `To handle file uploads`,
      `To sanitize user input`,
      `To define allowed parameters for mass assignment`,
    ],
    code: ``,
    correctAnswer: `To define allowed parameters for mass assignment`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to start a Rails console session?`,
    options: [
      `rails console`,
      `console rails`,
      `start rails console`,
      `rails start_console`,
    ],
    code: ``,
    correctAnswer: `rails console`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails helper files?`,
    options: [
      `To define database schema migrations`,
      `To handle user authentication logic`,
      `To assist with view rendering and logic`,
      `To generate test data`,
    ],
    code: ``,
    correctAnswer: `To assist with view rendering and logic`,
    type: `Ruby`,
  },
  {
    question: `Which Rails command is used to run the application's test suite?`,
    options: [`rails run_tests`, `rake test`, `rails test_suite`, `test rails`],
    code: ``,
    correctAnswer: `rake test`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the "gemfile" in a Rails application?`,
    options: [
      `To store database credentials`,
      `To manage application dependencies`,
      `To define routes and URL mappings`,
      `To configure the application's server settings`,
    ],
    code: ``,
    correctAnswer: `To manage application dependencies`,
    type: `Ruby`,
  },
  {
    question: `In Rails, what is the purpose of the app/assets folder?`,
    options: [
      `To store database configuration files`,
      `To store JavaScript, CSS, and image files`,
      `To define routing and URL mappings`,
      `To store database migration files`,
    ],
    code: ``,
    correctAnswer: `To store JavaScript, CSS, and image files`,
    type: `Ruby`,
  },
  {
    question: `Which Rails command is used to generate a new migration that adds a column to an existing table?`,
    options: [
      `rails generate column`,
      `rake db:add_column`,
      `rails add_column`,
      `rails generate migration`,
    ],
    code: ``,
    correctAnswer: `rails generate migration`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails routing file, routes.rb?`,
    options: [
      `To define database associations`,
      `To define routes and URL mappings`,
      `To manage user authentication`,
      `To handle file uploads`,
    ],
    code: ``,
    correctAnswer: `To define routes and URL mappings`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to rollback the last database migration in Rails?`,
    options: [
      `rake db:rollback`,
      `rails migrate:rollback`,
      `rails rollback_migration`,
      `rollback rails migration`,
    ],
    code: ``,
    correctAnswer: `rake db:rollback`,
    type: `Ruby`,
  },
  {
    question: `In Rails, what is the purpose of the "before_action" callback in a controller?`,
    options: [
      `To define associations between models`,
      `To handle file uploads before processing a request`,
      `To set up authentication for specific actions`,
      `To execute a method before certain controller actions`,
    ],
    code: ``,
    correctAnswer: `To execute a method before certain controller actions`,
    type: `Ruby`,
  },
  {
    question: `Which Rails command is used to generate a new model with its associated migration and unit test file?`,
    options: [
      `rails generate model`,
      `rake db:new_model`,
      `rails new_model`,
      `model generate rails`,
    ],
    code: ``,
    correctAnswer: `rails generate model`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the "belongs_to" association in Rails models?`,
    options: [
      `To define a one-to-many association`,
      `To define a many-to-many association`,
      `To define a one-to-one association`,
      `To define a polymorphic association`,
    ],
    code: ``,
    correctAnswer: `To define a one-to-many association`,
    type: `Ruby`,
  },
  {
    question: `Which directory contains the view templates in a Rails application?`,
    options: [`app/controllers`, `app/models`, `app/views`, `app/helpers`],
    code: ``,
    correctAnswer: `app/views`,
    type: `Ruby`,
  },
  {
    question: `Which Rails command is used to generate a new migration that creates a new table?`,
    options: [
      `rails generate table`,
      `rake db:new_table`,
      `rails new_migration`,
      `rails generate migration`,
    ],
    code: ``,
    correctAnswer: `rails generate migration`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails helper_method in a controller?`,
    options: [
      `To define methods accessible in views`,
      `To handle file uploads`,
      `To define associations between models`,
      `To define before filters for authentication`,
    ],
    code: ``,
    correctAnswer: `To define methods accessible in views`,
    type: `Ruby`,
  },
  {
    question: `In Rails, what is the purpose of a scope in a model?`,
    options: [
      `To define associations between models`,
      `To handle file uploads`,
      `To define reusable query conditions`,
      `To manage user authentication`,
    ],
    code: ``,
    correctAnswer: `To define reusable query conditions`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails callback "after_save" in a model?`,
    options: [
      `To handle file uploads after saving a record`,
      `To set up authentication after saving a record`,
      `To define associations between models`,
      `To execute a method after saving a record`,
    ],
    code: ``,
    correctAnswer: `To execute a method after saving a record`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to generate a new Rails migration that renames a column in a table?`,
    options: [
      `rails generate column_rename`,
      `rake db:rename_column`,
      `rails rename_column`,
      `rails generate migration`,
    ],
    code: ``,
    correctAnswer: `rails generate migration`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails asset pipeline manifest file, application.js?`,
    options: [
      `To manage user authentication logic`,
      `To define database schema migrations`,
      `To compile and serve JavaScript files`,
      `To handle file uploads`,
    ],
    code: ``,
    correctAnswer: `To compile and serve JavaScript files`,
    type: `Ruby`,
  },
  {
    question: `Which command is used to generate a new Rails migration that adds an index to a table column?`,
    options: [
      `rails generate index`,
      `rake db:add_index`,
      `rails add_index`,
      `rails generate migration`,
    ],
    code: ``,
    correctAnswer: `rails generate migration`,
    type: `Ruby`,
  },
  {
    question: `In Rails, what is the purpose of the "has_many :through" association?`,
    options: [
      `To define a one-to-one association`,
      `To define a many-to-many association with additional attributes`,
      `To define a one-to-many association`,
      `To define a polymorphic association`,
    ],
    code: ``,
    correctAnswer: `To define a many-to-many association with additional attributes`,
    type: `Ruby`,
  },
  {
    question: `Which Rails command is used to generate a new controller with RESTful actions only?`,
    options: [
      `rails generate controller`,
      `rails new_controller`,
      `scaffold rails controller`,
      `rails generate scaffold_controller`,
    ],
    code: ``,
    correctAnswer: `rails generate scaffold_controller`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails gemfile.lock file?`,
    options: [
      `To store database credentials`,
      `To manage application dependencies and their specific versions`,
      `To define routes and URL mappings`,
      `To configure the application's server settings`,
    ],
    code: ``,
    correctAnswer: `To manage application dependencies and their specific versions`,
    type: `Ruby`,
  },
  {
    question: `Which Rails command is used to generate a new migration that removes a column from a table?`,
    options: [
      `rails remove_column`,
      `rake db:remove_column`,
      `rails generate migration remove_column`,
      `rails generate migration`,
    ],
    code: ``,
    correctAnswer: `rails generate migration remove_column`,
    type: `Ruby`,
  },
  {
    question: `What is the purpose of the Rails "concerns" directory in the app folder?`,
    options: [
      `To store JavaScript, CSS, and image files`,
      `To handle user authentication logic`,
      `To define reusable modules and shared behavior`,
      `To store database configuration files`,
    ],
    code: ``,
    correctAnswer: `To define reusable modules and shared behavior`,
    type: `Ruby`,
  },
  {
    question: `What is the correct way to define a route for the "show" action of a "Posts" controller in Rails?`,
    options: [
      `get '/posts/show', to: 'posts#show'`,
      `get '/posts/:id', to: 'posts#show'`,
      `post '/posts', to: 'posts#show'`,
      `get '/posts/:id/show', to: 'posts#show'`,
    ],
    code: ``,
    correctAnswer: `get '/posts/:id', to: 'posts#show'`,
    type: `Ruby`,
  },
  {
    question: `In a Rails controller, what is the correct way to retrieve a single record from the database based on its ID?`,
    options: [
      `@record = Record.find_by_id(params[:id])`,
      `@record = Record.find_by(params[:id])`,
      `@record = Record.find(params[:id])`,
      `@record = Record.where(id: params[:id]).first`,
    ],
    code: ``,
    correctAnswer: `@record = Record.find(params[:id])`,
    type: `Ruby`,
  },
  {
    question: `In a Rails view, how would you output the value of a variable name within a paragraph tag?`,
    options: [
      `<p><%= name %></p>`,
      `<p><% name %></p>`,
      `<p><%= @name %></p>`,
      `<p><% @name %></p>`,
    ],
    code: ``,
    correctAnswer: `<p><%= name %></p>`,
    type: `Ruby`,
  },
  {
    question: `What is the correct way to define a one-to-many association between a "User" model and a "Post" model in Rails?`,
    options: [
      `In the "User" model: has_many :posts and in the "Post" model: belongs_to :user`,
      `In the "User" model: belongs_to :posts and in the "Post" model: has_one :user`,
      `In the "User" model: has_one :posts and in the "Post" model: belongs_to :user`,
      `In the "User" model: belongs_to_many :posts and in the "Post" model: has_many :users`,
    ],
    code: ``,
    correctAnswer: `In the "User" model: has_many :posts and in the "Post" model: belongs_to :user`,
    type: `Ruby`,
  },
  {
    question: `In a Rails form, what is the correct way to create a text field for a model attribute named email?`,
    options: [
      `<%= form.text_field :email %>`,
      `<%= form.email_field :email %>`,
      `<%= form.text_area :email %>`,
      `<%= form.field :email %>`,
    ],
    code: ``,
    correctAnswer: `<%= form.text_field :email %>`,
    type: `Ruby`,
  },
  {
    question: `In Rails, what is the correct way to define a route for creating a new resource in the "Posts" controller?`,
    options: [
      `post '/posts/new', to: 'posts#new'`,
      `get '/posts/create', to: 'posts#create'`,
      `get '/posts/new', to: 'posts#new'`,
      `post '/posts', to: 'posts#create'`,
    ],
    code: ``,
    correctAnswer: `post '/posts', to: 'posts#create'`,
    type: `Ruby`,
  },
  {
    question: `In a Rails controller, how would you redirect the user to the "show" page of a specific post after it is created?`,
    options: [
      `redirect_to post_path(@post)`,
      `redirect_to show_post_path(@post)`,
      `redirect_to posts_path(@post)`,
      `redirect_to :show_post`,
    ],
    code: ``,
    correctAnswer: `redirect_to post_path(@post)`,
    type: `Ruby`,
  },
  {
    question: `In a Rails view, how would you display a link that deletes a specific post when clicked?`,
    options: [
      `<%= link_to 'Delete', post_path(@post), method: :delete %>`,
      `<%= link_to 'Delete', delete_post_path(@post) %>`,
      `<%= link_to 'Delete', destroy_post_path(@post) %>`,
      `<%= link_to 'Delete', post_delete_path(@post) %>`,
    ],
    code: ``,
    correctAnswer: `<%= link_to 'Delete', post_path(@post), method: :delete %>`,
    type: `Ruby`,
  },
  {
    question: `What is the correct way to define a many-to-many association between a "User" model and a "Role" model in Rails?`,
    options: [
      `In the "User" model: has_and_belongs_to_many :roles and in the "Role" model: has_and_belongs_to_many :users`,
      `In the "User" model: has_many :roles and in the "Role" model: belongs_to :user`,
      `In the "User" model: belongs_to_many :roles and in the "Role" model: has_many :users`,
      `In the "User" model: has_one :roles and in the "Role" model: belongs_to :user`,
    ],
    code: ``,
    correctAnswer: `In the "User" model: has_and_belongs_to_many :roles and in the "Role" model: has_and_belongs_to_many :users`,
    type: `Ruby`,
  },
  {
    question: `In a Rails form, what is the correct way to create a select dropdown field for a model attribute named category with options "A", "B", and "C"?`,
    options: [
      `<%= form.select :category, ['A', 'B', 'C'] %>`,
      `<%= form.dropdown :category, ['A', 'B', 'C'] %>`,
      `<%= form.select_field :category, ['A', 'B', 'C'] %>`,
      `<%= form.dropdown_field :category, ['A', 'B', 'C'] %>`,
    ],
    code: ``,
    correctAnswer: `<%= form.select :category, ['A', 'B', 'C'] %>`,
    type: `Ruby`,
  },
  {
    question: `What is lazy loading in Ruby on Rails?`,
    options: [
      `Loading database records only when they are explicitly requested`,
      `Loading database records eagerly to improve performance`,
      `Loading JavaScript and CSS files asynchronously`,
      `Loading associated models along with the parent model in a single query`,
    ],
    code: ``,
    correctAnswer: `Loading database records only when they are explicitly requested`,
    type: `Ruby`,
  },
  {
    question: `What is eager loading in Ruby on Rails?`,
    options: [
      `Loading database records only when they are explicitly requested`,
      `Loading database records eagerly to improve performance`,
      `Loading JavaScript and CSS files asynchronously`,
      `Loading associated models along with the parent model in a single query`,
    ],
    code: ``,
    correctAnswer: `Loading database records eagerly to improve performance`,
    type: `Ruby`,
  },
  {
    question: `In Ruby on Rails, what does the direct superclass refer to?`,
    options: [
      `The class from which the current class directly inherits`,
      `The parent class of the super class`,
      `The class that is inherited indirectly through multiple levels of inheritance`,
      `The class that is included using the extend directive`,
    ],
    code: ``,
    correctAnswer: `The class from which the current class directly inherits`,
    type: `Ruby`,
  },
  {
    question: `In Ruby on Rails, what does the extend directive do?`,
    options: [
      `It includes a module into a class`,
      `It defines a class method within a module`,
      `It inherits from a superclass`,
      `It includes an instance method from another class`,
    ],
    code: ``,
    correctAnswer: `It defines a class method within a module`,
    type: `Ruby`,
  },
  {
    question: `What will be displayed on the page when the UsersController's index action is accessed?`,
    options: [
      `An error message`,
      `"User List" as a heading followed by a list of user names`,
      `An empty page with only the "User List" heading`,
      `None of the above`,
    ],
    code: `# app/controllers/users_controller.rb
class UsersController < ApplicationController
def index
@users = User.all
end
end

# app/views/users/index.html.erb
<h1>User List</h1>
<% @users.each do |user| %>
<p><%= user.name %></p>
<% end %>`,
    correctAnswer: `"User List" as a heading followed by a list of user names`,
    type: `Ruby`,
  },
  {
    question: `What will be displayed on the page when the PostsController's show action is accessed for a valid id?`,
    options: [
      `An error message`,
      `The title and content of the post`,
      `An empty page`,
      `None of the above`,
    ],
    code: `# app/controllers/posts_controller.rb
class PostsController < ApplicationController
def show
@post = Post.find(params[:id])
end
end

# app/views/posts/show.html.erb
<h1><%= @post.title %></h1>
<p><%= @post.content %></p>`,
    correctAnswer: `The title and content of the post`,
    type: `Ruby`,
  },
  {
    question: `What will be displayed on the page when the EventsController's show action is accessed for a valid id?`,
    options: [
      `An error message`,
      `The title of the event`,
      `The start time of the event in the format "Month Day, Year"`,
      `None of the above`,
    ],
    code: `# app/controllers/events_controller.rb
class EventsController < ApplicationController
def show
@event = Event.find(params[:id])
end
end

# app/views/events/show.html.erb
<h1><%= @event.title %></h1>
<p><%= @event.start_time.strftime("%B %d, %Y") %></p>`,
    correctAnswer: `The start time of the event in the format "Month Day, Year"`,
    type: `Ruby`,
  },
  {
    question: `Consider the below Ruby on Rails code snippet. Which action is responsible for displaying a single post and its author?`,
    options: [
      `index action in the PostsController`,
      `show action in the PostsController`,
      `create action in the PostsController`,
      `None of the above`,
    ],
    code: `# app/models/user.rb
class User < ApplicationRecord
has_many :posts
end

# app/models/post.rb
class Post < ApplicationRecord
belongs_to :user
validates :title, presence: true
end

# app/controllers/posts_controller.rb
class PostsController < ApplicationController
def show
@post = Post.find(params[:id])
@user = @post.user
end
end

# app/views/posts/show.html.erb
<h1><%= @post.title %></h1>
<p><%= @post.content %></p>
<p>Author: <%= @user.name %></p>`,
    correctAnswer: `show action in the PostsController`,
    type: `Ruby`,
  },
  {
    question: `Consider the below Ruby on Rails code snippet. What does the code do?`,
    options: [
      `Retrieves the total number of users from the database and assigns it to the @count variable.`,
      `Assigns the value of User.count to the @count variable.`,
      `Assigns the value of count attribute of the current user to the @count variable.`,
      `None of the above.`,
    ],
    code: `@count = User.count`,
    correctAnswer: `Assigns the value of User.count to the @count variable.`,
    type: `Ruby`,
  },
  {
    question: `Consider the below Ruby on Rails code snippet. What does the code do?`,
    options: [
      `Renders a JSON response with the message "Hello, World!".`,
      `Redirects to the "Hello, World!" page.`,
      `Raises an error with the message "Hello, World!".`,
      `None of the above.`,
    ],
    code: `render json: { message: "Hello, World!" }`,
    correctAnswer: `Renders a JSON response with the message "Hello, World!".`,
    type: `Ruby`,
  },
  {
    question: `Consider the below Ruby on Rails code snippet. What does the code do?`,
    options: [
      `Retrieves the 5 most recent published posts along with their associated users, ordered by creation time in descending order, and assigns them to the @posts variable.`,
      `Retrieves all posts along with their associated users, ordered by creation time in descending order, and limits the result to 5 records, assigning them to the @posts variable.`,
      `Retrieves the 5 most recent published posts, ordered by creation time in descending order, and assigns them to the @posts variable.`,
      `None of the above.`,
    ],
    code: `@posts = Post.includes(:user).where(published: true).order(created_at: :desc).limit(5)`,
    correctAnswer: `Retrieves the 5 most recent published posts along with their associated users, ordered by creation time in descending order, and assigns them to the @posts variable.`,
    type: `Ruby`,
  },
  {
    question: `Consider the below Ruby on Rails code snippet. What does the code do?`,
    options: [
      `Retrieves all users who have at least one published post, removing any duplicates, and assigns them to the @users variable.`,
      `Retrieves all users who have published posts, including duplicates, and assigns them to the @users variable.`,
      `Retrieves all published posts along with their associated users, removing any duplicates, and assigns them to the @users variable.`,
      `None of the above.`,
    ],
    code: `@users = User.joins(:posts).where("posts.published = ?", true).distinct`,
    correctAnswer: `Retrieves all users who have at least one published post, removing any duplicates, and assigns them to the @users variable.`,
    type: `Ruby`,
  },
  {
    question: `Consider the below Ruby on Rails code snippet. What will be displayed in the console when this code is executed?`,
    options: [
      `The title of the latest post.`,
      `An error message.`,
      `An empty line.`,
      `None of the above.`,
    ],
    code: ``,
    correctAnswer: `The title of the latest post.`,
    type: `Ruby`,
  },
];

module.exports.AssessQuestions = Assessment;
