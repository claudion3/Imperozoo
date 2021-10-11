import { Component } from 'react';
import { Table, Space, Button } from 'antd';
import { Animal } from '../../model';
import 'antd/dist/antd.css';

import style from './AdminTable.module.scss';

/**
 * @memberOf AdminScreen
 */
export type TableData = Pick<Animal, 'name' | 'breed' | 'status'> & {
	age: number;
	type: string;
};

type AdminTableProps = {
	data: Array<TableData>;
	deleteHandler: () => void;
	adoptHandler: () => void;
};

type AdminTableState = {
	columns: Array<object>;
	available: boolean;
};

/**
 * List of Animals.
 *
 * @component
 * @category Pages
 * @subcategory AdminScreen
 * @hideConstructor
 */
export class AdminTable extends Component<AdminTableProps, AdminTableState> {
	constructor(props: AdminTableProps) {
		super(props);

		this.state = {
			available: false,

			columns: [
				{
					title: 'Name',
					dataIndex: 'name',
					key: 'name',
				},
				{
					title: 'Type',
					dataIndex: 'type',
					key: 'type',
				},
				{
					title: 'Breed',
					dataIndex: 'breed',
					key: 'breed',
					responsive: ['sm'],
				},
				{
					title: 'Age',
					dataIndex: 'age',
					key: 'age',
					responsive: ['sm'],
				},
				{
					title: 'Status',
					dataIndex: 'status',
					key: 'status',
					responsive: ['sm'],
				},
				{
					title: '',
					key: 'action',

					render: () => (
						<Space>
							<Button onClick={this.props.adoptHandler}>Adopt</Button>
							<Button onClick={this.props.deleteHandler}>Delete</Button>
						</Space>
					),
				},
			],
		};
	}

	render() {
		return (
			<div className={style.table}>
				<style>
					{`
            .ant-table-content {
                border: 1px solid #333;
                
            }
            .ant-table-thead .ant-table-cell {
                background: #000;
                border-bottom: 1px solid #333;
                color: #fff;
                padding: 0.8rem 1rem;
            }
            .ant-table-tbody > tr > td {
                border-bottom: 1px solid #ccc;
                padding: 0.7rem 0.9rem;
            }
            
        `}
				</style>
				<Table
					dataSource={this.props.data}
					columns={this.state.columns}
					pagination={false}
				/>
			</div>
		);
	}
}

export default AdminTable;
