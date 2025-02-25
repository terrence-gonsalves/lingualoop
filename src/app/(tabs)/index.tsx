import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  Dimensions,
  Pressable, 
  TouchableOpacity
} from 'react-native';
import { 
  Card, 
  Surface, 
  Button, 
  Divider 
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
// import { Colors } from '@/src/constants/Colors';
// import { Fonts } from '@/src/constants/Fonts';
import { Avatar } from '@/src/components/Avatar';

const { width } = Dimensions.get('window');

const DashboardScreen = () => {

  // mock data for languages and activities
  const languages = [
    { id: 1, name: 'Spanish', totalHours: 42, streak: 15 },
    { id: 2, name: 'French', totalHours: 28, streak: 10 },
    { id: 3, name: 'Japanese', totalHours: 18, streak: 5 }
  ];

  const recentActivities = [
    { id: 1, language: 'Spanish', type: 'Listening', duration: 30 },
    { id: 2, language: 'French', type: 'Reading', duration: 45 },
    { id: 3, language: 'Japanese', type: 'Speaking', duration: 20 }
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View>
            <View style={styles.headerWrapper}>
              <View>
                <Text style={styles.boldText}>Current language</Text>
                <Text>Spanish</Text>
              </View>
              <Pressable hitSlop={20}>
                <Avatar width={75} />
              </Pressable>
            </View>
            <View style={styles.nameTextWrapper}>
              <Text style={styles.nameText}>Hi Terrence!</Text>
            </View>
          </View>

          <View>
            <View style={styles.dailyGoalWrapper}>
              <Text style={styles.dailyGoalText}>Daily Goal</Text>
              <View style={styles.dailyGoalTracker}>
                <Text>0/60 min(s)</Text>
              </View>
            </View>
        </View>
      </View>

      <View style={styles.languagesOverview}>
        <Text style={styles.sectionTitle}>Your Languages</Text>

        {languages.map((lang, index) => (
          <View key={index} style={styles.languageItem}>
            <Text style={styles.languageName}>{lang.name}</Text>
            <Text>Total time: {lang.totalHours} min</Text>
            <Text>Streak: {lang.streak} days</Text>
          </View>
        ))}

      </View>

      <Surface style={styles.recentActivities}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>

        {recentActivities.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <Text>{activity.language}: {activity.type}</Text>
            <Text>{activity.duration} min</Text>
          </View>
        ))}

      </Surface>

        {/* Start Tracking Button */}
        <TouchableOpacity style={styles.startButton}>
          <Ionicons name="play-circle" size={24} color="white" />
          <Text style={styles.startButtonText}>Start New Session</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },

    contentContainer: {
      padding: 15,
  },
  contentLanguageContainer: {
      padding: 15,
      flex: 1,
  },
  headerWrapper: {
      flex: 1, 
      justifyContent: 'space-between', 
      flexDirection: 'row', 
      height: 100
  },
  boldText: {
      fontWeight: 'bold',
  },
  nameTextWrapper: {
      paddingLeft: 25, 
      marginBottom: 15
  },
  nameText: {
      fontSize: 25, 
      //color: Colors.light.textPrimary
  },
  dailyGoalWrapper: {
      width: '100%', 
      padding: 20, 
      marginBottom: 20
  },
  dailyGoalText: {
      fontSize: 18, 
      fontWeight: 'bold', 
      //color: Colors.light.textPrimary, 
      marginBottom: 15
  },
  dailyGoalTracker: {
      alignSelf: 'center', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderColor: 'lightgrey', 
      width: 200, 
      height: 200, 
      borderWidth: 10, 
      borderRadius: 100 
  },
  informationWrapper: {
      width: '100%', 
      backgroundColor: '#F7F8FB', 
      borderWidth: 1, 
      borderColor:'#F7F8FB', 
      borderRadius: 10, 
      padding: 20,  
      marginBottom: 20
  },
  informationTitle: {
      fontSize: 18, 
      fontWeight: 'bold', 
      color: 'black', 
      marginBottom: 15
  },
  informationContentWrapper: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 20
  },
  levelWrapper: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'flex-end'
  },
  levelContent: {
      width: 40, 
      backgroundColor: 'lightgrey', 
      borderRadius: 10
  },
  logoContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  logoImg: {
      width: 170,
  },
  landingPageImage: {
      flex: 1,
      width: 250,
      height: 250,
      resizeMode: 'contain'
  },
  bodyText: {
      //color: Colors.light.textSecondary,
      //fontSize: Fonts.size.bodyCopy,
      marginBottom: 20,
  },
  modelContent: {
    //backgroundColor: Colors.light.drab,
    padding: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  modelContentTitle: {
    fontSize: 20,
    //color: Colors.light.textTertiary,
    marginBottom: 20,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  countryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 1,
      //borderColor: Colors.light.borders,
      //backgroundColor: Colors.light.ice,
      padding: 20,
      marginBottom: 10
  },
  countryName: {
      //fontSize: Fonts.size.btnLabel
  },

    title: {
      fontSize: 24,
      //fontWeight: Fonts.weight.bold,
      textAlign: 'center',
      marginVertical: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    languagesOverview: {
      //backgroundColor: Colors.light.background,
      padding: 15,
      borderRadius: 10,
      marginHorizontal: 15,
      marginBottom: 20,
    },
    languageItem: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
    },
    languageName: {
      //fontWeight: Fonts.weight.bold,
      marginBottom: 5,
    },
    recentActivities: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      marginHorizontal: 15,
      marginBottom: 20,
    },
    activityItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    startButton: {
      backgroundColor: '#4CAF50',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      borderRadius: 10,
      marginHorizontal: 15,
      marginBottom: 20,
    },
    startButtonText: {
      color: 'white',
      fontSize: 18,
      marginLeft: 10,
    },
  });

export default DashboardScreen;