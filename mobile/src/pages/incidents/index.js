import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
  const navigator = useNavigation();
  const [incidents, setIncidents] = useState([]);

  function navigateToDetail() {
    navigator.navigate('Detail');
  }

  async function loadIncidents() {
    api.get('incidents')
      .then(response => setIncidents(response.data));
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>0 casos</Text>.</Text>
      </View>

      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (

          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{incident.value}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#e02041' ></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
