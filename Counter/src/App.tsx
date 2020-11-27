import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const Body = Styled.View`
  background-color: ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionDescription = Styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight: 700;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header/>
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to change this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>See Your Changes</SectionDescription>
              <SectionDescription>
                <ReloadInstructions/>
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>Debug</SectionDescription>
              <SectionDescription>
                <DebugInstructions/>
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>Learn More</SectionDescription>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
              <LearnMoreLinks/>
            </SectionContainer>
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App;

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
