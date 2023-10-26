import React from 'react';
import { addToData, jsonData } from '../Data/data';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Home = () => {
	const { register, handleSubmit, formState: {errors} } = useForm();
	const onSubmit = (data) => addToData(data);
	return (
		<>
			<h1>Home page</h1>
			<table>
				<tbody>
				{jsonData.data
					.sort((a, b)=>(a.order - b.order))
					.map((item, index) => {
						return(
							<tr key={item.id + index}>
								<td><Link to={`/tabs/${item.id}/`}>{item.title}</Link></td><td>{item.order}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder={'Id'} {...register('id', {required: 'Id is required'})} aria-invalid={errors.id ? 'true' : 'false'} />
				{errors.id?.type === 'required' && (
					<p className={'error-message'} role='alert'>Id is required</p>
				)}
				<input placeholder={'Title'} {...register('title', {required: true})} aria-invalid={errors.title ? 'true' : 'false'}/>
				{errors.title?.type === 'required' && (
					<p className={'error-message'} role='alert'>Title is required</p>
				)}
				<input placeholder={'Order'} {...register('order')} value={jsonData.data.length} />
				<input placeholder={'Path'} {...register('path', {required: true})} aria-invalid={errors.path ? 'true' : 'false'} />
				{errors.path?.type === 'required' && (
					<p className={'error-message'} role='alert'>Path is required</p>
				)}
				<input type='submit' value={'Send'} />
			</form>
			<table>
				<tbody>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Order</th>
						<th>Path</th>
					</tr>
					{jsonData.data
						.sort((a, b)=>(a.order - b.order))
						.map((item, index) => {
							return(
								<tr key={`table-${item.id + index}`}>
									<td>
										{item.id}
									</td>
									<td>
										<Link to={`/tabs/${item.id}/`}>{item.title}</Link>
									</td>
									<td>
										{item.order}
									</td>
									<td>
										{item.path}
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</>
	);
};

export default Home;