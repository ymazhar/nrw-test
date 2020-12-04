import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export const PageTitle = ({ title }) => <h1 className="page-title">{title}</h1>;

PageTitle.propTypes = {
  title: PropTypes.string,
};
