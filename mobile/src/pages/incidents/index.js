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
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigator.navigate('Detail', { incident });
  }

  async function loadIncidents() {

    if (loading)
      return;

    if (total > 0 && incidents.length === total)
      return;

    api.get('incidents', {
      params: { pageNumber: page }
    })
      .then(response => {
        setLoading(true);
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadIncidents();
  }, [incidents])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Total of <Text style={styles.headerTextBold}>{total} causes</Text>.</Text>
      </View>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>Choose one of the cases below and save the day</Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (

          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>{incident.Ngo.name}</Text>

            <Text style={styles.incidentProperty}>CAUSE:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALUE:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>View more details</Text>
              <Feather name='arrow-right' size={16} color='#e02041' ></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
