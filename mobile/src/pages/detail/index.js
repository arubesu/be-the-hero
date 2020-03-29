import React from 'react';
import { View, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  const navigator = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no
  caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(incident.value)}`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: incident.title,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=&${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigator.goBack}>
          <Feather name='arrow-left' size={28} color='#e02041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox} >
        <Text style={styles.contactBoxTitle} >Salve o dia!</Text>
        <Text style={styles.contactBoxTitle} >Seja o herói desse caso</Text>

        <Text style={styles.contactBoxDescription} >Entre em contato:</Text>
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
    </View>
  )
}