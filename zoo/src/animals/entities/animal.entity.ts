import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'Animals',
})
export class Animal extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Nombre del animal',
  })
  declare name: string;

  @Column({
    type: DataType.INTEGER,
    comment: 'Edad del animal',
  })
  declare age: number;

  declare createdAt: Date;
  declare updatedAt: Date;
}
