import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collectios-overview.styles.scss';

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-owerview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector(
  { collections: selectCollectionsForPreview },
);

export default connect(mapStateToProps)(CollectionsOverview);
