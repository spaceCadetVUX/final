import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Animated,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Series3 from './screens/List/List3Siries';

const home = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('BMW M');
  const [subTabs, setSubTabs] = useState(['ALL BMW M']);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [selectedSubTab, setSelectedSubTab] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);

  const handleOptionPress = () => {
    setModalVisible(true);
  };

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)'],
    extrapolate: 'clamp'
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.9],
    extrapolate: 'clamp'
  });
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [80, 60],
    extrapolate: 'clamp'
  });

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '40deg'],
    extrapolate: 'clamp'
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    Animated.timing(rotateAnim, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const handleMainTabPress = (tab) => {
    setSelectedTab(tab);
    switch (tab) {
      case 'BMW':
        setSubTabs(['3', '4', '5', '7', '8', 'X', 'Z']);
        break;
      case 'BMW M':
        setSubTabs(['ALL BMW M']);
        break;
      case 'BMW i':
        setSubTabs(['ALL BMW i']);
        break;
      default:
        setSubTabs([]);
        break;
    }
  };

  const handleSubTabPress = (subTab) => {
    setSelectedSubTab(subTab);
  };


  return (
    <View style={[styles.container, isDarkTheme ? styles.darkBackground : styles.lightBackground]}>
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor,
            height: headerHeight,
            transform: [{ scale: headerScale }]
          }
        ]}
      >
        <TouchableOpacity onPress={toggleMenu}>
          <Animated.Image
            source={{ uri: 'https://d35wmn7bemzfye.cloudfront.net/c344b10130d0ceb7a289b1a4816828400708c59f/1724832929/images/logo-white.png' }}
            style={[styles.logo, { transform: [{ rotate }] }]}
          />
        </TouchableOpacity>

        <View style={styles.verticalSeparator} />

        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => alert('Call')}>
            <Ionicons
              style={isDarkTheme ? styles.darkText2 : styles.lightText2}
              name="call" size={24} color="black"
            />
            <Text style={isDarkTheme ? styles.darkText2 : styles.lightText2}>
              Call
            </Text>
          </TouchableOpacity>

          <View style={styles.verticalSeparator} />

          <TouchableOpacity onPress={handleOptionPress}>
            <Ionicons
              style={isDarkTheme ? styles.darkText : styles.lightText}
              name="options" size={24} color="black"
            />
            <Text style={isDarkTheme ? styles.darkText2 : styles.lightText2}>
              Menu
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.separator} />

      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={15}
      >
        <Image
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_873/auto-titan/12cc1451f10500d3540bbe5853081475/banner_image_new.png' }}
          style={styles.image}
        />
        <View style={{ position: 'absolute', top: 80, left: 20 }}>
          <Text style={{ color: 'white', fontSize: 25 }}>THE IX3</Text>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>BMW IX3</Text>

          <View style={{ marginTop: 100, flexDirection: 'row' }}>
            <TouchableOpacity style={{ padding: 5, paddingHorizontal: 20, backgroundColor: '#1c69d3', marginRight: 10 }}>
              <Text style={{ fontWeight: 'bold', color: "white", fontSize: 10 }}>Register interest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5, paddingHorizontal: 20, backgroundColor: '#4d4d4d' }}>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 10 }}>Book a Test Drive</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={isDarkTheme ? styles.darkText : styles.lightText}>
          KHÁM PHÁ TẤT CẢ CÁC MẪU XE BMW
        </Text>
        <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
          CHỌN DÒNG XE
        </Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'BMW' && styles.activeTab, isDarkTheme ? styles.activeTabd : styles.activeTabl]}
            onPress={() => handleMainTabPress('BMW')}
          >
            <Text style={[styles.tabText, selectedTab === 'BMW' && styles.activeTabText, isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
              BMW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'BMW M' && styles.activeTab, isDarkTheme ? styles.activeTabd : styles.activeTabl]}
            onPress={() => handleMainTabPress('BMW M')}
          >
            <Text style={[styles.tabText, selectedTab === 'BMW M' && styles.activeTabText, isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
              BMW M
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'BMW i' && styles.activeTab, isDarkTheme ? styles.activeTabd : styles.activeTabl]}
            onPress={() => handleMainTabPress('BMW i')}
          >
            <Text style={[styles.tabText, selectedTab === 'BMW i' && styles.activeTabText, isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
              BMW i
            </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.subTabContainer}>
        {subTabs.map((subTab) => (
          <TouchableOpacity key={subTab} onPress={() => handleSubTabPress(subTab)}>
            <Text style={styles.subTabText}>{subTab}</Text>
          </TouchableOpacity>
        ))}
         {selectedSubTab && <Series3 subTab={selectedSubTab} />}
        </View>

        <View style={styles.tabContainercon}>
          {subTabs.map((subTab) => (
            <TouchableOpacity
              key={subTab}
              style={[styles.tabcon, selectedTab === subTab && styles.activeTab, isDarkTheme ? styles.activeTabd : styles.activeTabl]}
              onPress={() => setSelectedTab(subTab)}
            >
              <Text style={[styles.tabText, selectedTab === subTab && styles.activeTabText, isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
                {subTab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.container, isDarkTheme ? styles.darkBackground1 : styles.lightBackground1]}>
          <Text style={isDarkTheme ? styles.darkText : styles.lightText}>
            TIỆN ÍCH BMW
          </Text>
          <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
            CHỌN DỊCH VỤ BMW
          </Text>

          <TouchableOpacity>
            <Image
              source={require('./1.png')}
              style={styles.image1}
            />
            <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
              Đặt Hẹn Dịch Vụ BMW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./2.png')}
              style={styles.image1}
            />
            <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
              Đặt Lịch Lái Thử BMW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./3.png')}
              style={styles.image1}
            />
            <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
              Chính Hãng
            </Text>
          </TouchableOpacity>
        </View>
        



      </Animated.ScrollView>



      {/* Modal cho các chức năng */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: 'white' }]}>
            <Text style={styles.modalTitle}>Chức năng</Text>
            <TouchableOpacity onPress={() => alert('Trang chủ')}>
              <Text style={styles.modalOption}>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Mẫu xe')}>
              <Text style={styles.modalOption}>Mẫu xe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('bookForm')}>
              <Text style={styles.modalOption}>Đặt hẹn lái thử</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Hệ thống phân phối')}>
              <Text style={styles.modalOption}>Hệ thống phân phối</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Tìm hiểu')}>
              <Text style={styles.modalOption}>Tìm hiểu</Text>
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <Text style={styles.modalOption}>Theme: </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isDarkTheme}
              />
              {isDarkTheme ? (
                <Ionicons name="moon" size={24} color="black" style={styles.icon} />
              ) : (
                <Ionicons name="sunny" size={24} color="black" style={styles.icon} />
              )}
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor:'#cccccc'
  },
  header: {
  

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    

  },
  optionsContainer: {

    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalSeparator: {
    width: 1,
    height: 40,
    backgroundColor: '#cccccc',
    marginHorizontal:10

  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 15,
  },
  content: {
    alignItems: 'center',
    padding: 0,
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  lightBackground1: {
    backgroundColor: '#ededed',
    height:100,
    width:400,
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
  darkBackground1: {
    backgroundColor: '#525252',
    height:100,
    width:400,
  },
  lightHeaderText: {
    fontSize: 24,
    color: '#000000',
  },
  darkHeaderText: {
    fontSize: 24,
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  darkText: {
    color: '#ffffff',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lightText1: {
    color: '#000000',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 28,
  },
  darkText1: {
    color: '#ffffff',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 28,
  },
    darkText3: {
    color: '#ffffff',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'flex-start',
    fontSize: 28,
  },
    lightText3: {
    flex:1,
    backgroundColor:'pink',
    color: '#000000',
    marginVertical: 1,
    marginTop:20,
    marginLeft:25,
    marginBottom:20,
    textAlign: 'flex-start',
    fontSize: 28,
  },
  lightText2: {
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
  },
  darkText2: {
    color: '#ffffff',
    marginVertical: 2,
    textAlign: 'center',
  },
  image: {
    width: "100%",
    height: 250,
    marginTop: 10,
    marginBottom: 10,
    justifyContent:'center',
    alignItems:'center',
  },
    image1: {
    width: 200,
    height: 200,
    marginLeft:100,
  },
    image2: {
    width: 380,
    height: 160,
    marginBottom: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
  },
  tabContainercon: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
  },
  tabcon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  activeTab:{
    borderBottomWidth: 5,
  },
    activeTabd: {
    borderBottomColor: '#fff',
  },
    activeTabl: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#777',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  lightTabText: {
    color: '#000',
  },
  darkTabText: {
    color: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default home;
