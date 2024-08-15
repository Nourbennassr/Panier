// src/App.js
import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Panier from './components/Panier';
import ListeProduits from './components/ListeProduits';
import Appbar from './components/AppBar';


const { Header, Content } = Layout;

const produitsDisponibles = [
  { key: 1, nom: 'Produit 1', prix: 50, image: '/images/produit1.png', quantite: 1 },
  { key: 2, nom: 'Produit 2', prix: 75, image: '/images/produit2.png', quantite: 1 },
  // Ajoutez d'autres produits
];

const App = () => {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    setPanier((prevPanier) => [...prevPanier, produit]);
  };

  const modifierQuantite = (key, quantite) => {
    setPanier((prevPanier) =>
      prevPanier.map((produit) => (produit.key === key ? { ...produit, quantite } : produit))
    );
  };

  const supprimerProduit = (key) => {
    setPanier((prevPanier) => prevPanier.filter((produit) => produit.key !== key));
  };
  
  return (
   
    <Layout>
     
    <Appbar/>
    
      <Content style={{ padding: '50px' }}>
        <Row gutter={16}>
          <Col span={16}>
            <ListeProduits produits={produitsDisponibles} ajouterAuPanier={ajouterAuPanier} />
          </Col>
          <Col span={8}>
            <Panier panier={panier} modifierQuantite={modifierQuantite} supprimerProduit={supprimerProduit} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
