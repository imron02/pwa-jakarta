import React, { Component } from 'react';
import { Avatar, Divider } from 'antd';

import BaseContainer from '../index';
import MeseumImage from '../../assets/images/museum.jpg';
import './index.scss';

class Museum extends Component {
  state = {}

  componentDidMount() {
    this.getMuseumList();
  }

  getMuseumList = () => {
    const { getMuseum } = this.props;

    getMuseum();
  }

  render() {
    return (
      <BaseContainer {...this.props}>
        <Avatar shape="square" size={150} src={MeseumImage} className="avatar-logo" />
        <article>
          <p>
            <span>M</span>useum adalah institusi permanen, nirlaba, melayani kebutuhan publik, dengan sifat
            terbuka, dengan cara melakukan usaha pengoleksian, mengkonservasi, meriset,
            mengomunikasikan, dan memamerkan benda nyata kepada masyarakat untuk kebutuhan studi,
            pendidikan, dan kesenangan. Karena itu ia bisa menjadi bahan studi oleh kalangan
            akademis, dokumentasi kekhasan masyarakat tertentu, ataupun dokumentasi dan pemikiran
            imajinatif pada masa depan. Sejak tahun 1977, setiap tanggal 18 Mei diperingati
            sebagai Hari Museum Internasional.
          </p>
        </article>
        <Divider>List museum yang ada di Jakarta</Divider>
        <div className="content">
          <h1>Selamat datang </h1>
        </div>
      </BaseContainer>
    );
  }
}

export default Museum;
