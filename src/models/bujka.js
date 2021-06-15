const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class t_nib_bujka extends Model {
    static associate(models) {
      // define association here
    }
  };
  t_nib_bujka.init(
    {
    id_permohonan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    sektor: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nama_pj_bu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    negara_pj_bu: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    npwp_pj_bu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nama_pj_tbu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat_perwakilan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    perwakilan_daerah_id: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    telp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nama_prinsipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat_prinsipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    negara_prinsipal: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    telp_prinsipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax_prinsipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email_prinsipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bidang_kegiatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jml_tki: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jml_tka: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jns_usaha: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    jangka_waktu: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: equelize.DATE('TODAY')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: sequelize.DATE('TODAY')
    },
    flag_migrasi: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    flag_bujka_lama: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    no_bujka_lama: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgl_terbit_bujka_lama: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_nib_bujka',
    modelName: 't_nib_bujka',
    schema: 'oss_rba_pengawasan',
    timestamps: false
  });
  return t_nib_bujka;
};