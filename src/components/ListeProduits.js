
import React from 'react';
import { Card, Button, InputNumber } from 'antd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//Composant pour ajouter des produits 
const { Meta } = Card;

const ListeProduits = ({ produits, ajouterAuPanier }) => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {produits.map((produit) => (
        <Card
          key={produit.key}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={produit.nom} src={produit.image} />}
        >
          <Meta title={produit.nom} description={`${produit.prix} TND`} />
          <div style={{ marginTop: '16px' }}>
            <h4>quantité</h4>
            <InputNumber min={1} defaultValue={1} onChange={(value) => (produit.quantite = value)} />
            <Button type="primary" icon={<AddShoppingCartIcon />} style={{ marginLeft: '8px' }} onClick={() => ajouterAuPanier(produit)}>
           
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ListeProduits;
