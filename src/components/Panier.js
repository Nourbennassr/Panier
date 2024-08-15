
import { Button, InputNumber, Table } from 'antd';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
//Composant de Gestion de Panier
const Panier = ({ panier = [], modifierQuantite, supprimerProduit }) => {
  const columns = [
    {
      title: 'Produit',
      dataIndex: 'nom',
      key: 'nom',
    },
    {
      title: 'Prix',
      dataIndex: 'prix',
      key: 'prix',
      render: (text) => `${text} TND`,
    },
    {
      title: 'Quantité',
      key: 'quantite',
      render: (_, record) => (
        <InputNumber
          min={1}
          defaultValue={record.quantite}
          onChange={(value) => modifierQuantite(record.key, value)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button danger  icon={< DeleteIcon/>} onClick={() => supprimerProduit(record.key)}>
          Supprimer
        </Button>
      ),
    },
  ];
//Calcul des reductions
  const calculateTotalBeforeReduction = (panier) => {
    return panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0);
  };

  const calculateReduction = (total) => {
    if (total > 200) return total * 0.10;
    if (total > 100) return total * 0.05;
    return 0;
  };

  const calculateTotal = (panier) => {
    const totalBeforeReduction = calculateTotalBeforeReduction(panier);
    return totalBeforeReduction - calculateReduction(totalBeforeReduction);
  };

  return (
    <div>
      <Table
        dataSource={panier}
        columns={columns}
        pagination={false}
        footer={() => (
          <div>
            <p>Montant Total Avant Réduction: {calculateTotalBeforeReduction(panier)} TND</p>
            <p>Réduction : {calculateReduction(calculateTotalBeforeReduction(panier))} TND</p>
            <p>Montant Total Après Réduction : {calculateTotal(panier)} TND</p>
          </div>
        )}
      />
    </div>
  );
};

export default Panier;
