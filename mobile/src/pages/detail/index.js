import React from 'react';
import { View, TouchableOpacity, Text, Image, Linking, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  const navigator = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const { Ngo: ngo } = incident;

  const message = `Hi ${ngo.name}, I'm getting in touch because I would like to help
  in the cause "${incident.title}" with the value of ${Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(incident.value)}`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: incident.title,
      recipients: [ngo.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=&${incident.whatsapp}&text=${message}`);
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigator.goBack}>
          <Feather name='arrow-left' size={28} color='#e02041' />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>NGO:</Text>
          <Text style={styles.incidentValue}>{ngo.name} from {ngo.city}/{ngo.state}</Text>

          <Text style={styles.incidentProperty}>CAUSE:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>

          <Text style={styles.incidentProperty}>VALUE:</Text>
          <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'USD'
          }).format(incident.value)}
          </Text>
        </View>

        <View style={styles.contactBox} >
          <Text style={styles.contactBoxTitle} >Save the day!</Text>
          <Text style={styles.contactBoxTitle} >Be the hero of this cause</Text>

          <Text style={styles.contactBoxDescription} >Contact:</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.action}
              onPress={sendWhatsApp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.action}
              onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}