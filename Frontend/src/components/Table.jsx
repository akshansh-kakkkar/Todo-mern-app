import React, { useState } from 'react'

const Table = ({ tasks = [], ondelete, onToggle, onEdit }) => {
    const [editingId, setEditingId] = useState(null)
    const [editTitle, setEditTitle] = useState('')

    const startEdit = (task) => {
        setEditingId(task._id)
        setEditTitle(task.title)
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditTitle('')
    }

    const saveEdit = async (id) => {
        if (!editTitle.trim()) return
        if (onEdit) await onEdit(id, editTitle)
        cancelEdit()
    }

    return (
        <div className="flex justify-center mt-[10vw]">
            <table className="w-3/4 border-collapse rounded-xl overflow-hidden">
                <thead className="bg-orange-400">
                    <tr className="divide-x divide-orange-300 text-2xl">
                        <th className="px-6 py-4 text-center ">Tasks</th>
                        <th className="px-6 py-4 text-center">Completed</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-blue-300">
                    {tasks.map((task) => (
                        <tr className="divide-x divide-blue-300 bg-orange-100 transition font-bold text-xl" key={task._id || task.id}>
                            <td className="px-6 py-4 text-[#431407]">
                                {editingId === task._id ? (
                                    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="w-full p-2 rounded" />
                                ) : (
                                    task.title
                                )}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <input
                                    type="checkbox"
                                    className='h-5 w-5 rounded border-gray-300 accent-green-600 focus:ring-green-500'
                                    checked={!!task.isDone}
                                    onChange={() => onToggle && onToggle(task._id, !task.isDone)}
                                />
                            </td>
                            <td className="px-6 py-4 text-center ">
                                {editingId === task._id ? (
                                    <>
                                        <button className='m-1 p-2 py-2 rounded-2xl bg-green-500 text-white font-bold' onClick={() => saveEdit(task._id)}>Save</button>
                                        <button className='m-1 p-2 py-2 rounded-2xl bg-gray-400 text-white font-bold' onClick={cancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button className='m-1 p-2 py-2 rounded-2xl bg-orange-400 text-white font-bold' onClick={() => { ondelete(task._id) }}>Delete</button>
                                        <button className='m-1 py-2 p-4 rounded-2xl text-white font-bold bg-orange-400' onClick={() => startEdit(task)}>Edit</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Table