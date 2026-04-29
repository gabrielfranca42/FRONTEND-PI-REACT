import React, { useState } from 'react';
import { Modal } from '../../../components/common/Modal';

const CourseManagementPage = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: 1, nome: 'ADS', carga: 200 },
    { id: 2, nome: 'MBA', carga: 100 }
  ];

  return (
    <div className="admin-container">
      <h2 className="page-title">CURSO</h2>
      <div className="search-bar">
        <input type="text" placeholder="PESQUISAR CURSO..." />
      </div>
      
      <button className="btn-add">+ CURSO</button>

      <table className="course-table">
        <thead>
          <tr>
            <th>NOME</th>
            <th>HORÁRIO (CARGA)</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.nome}</td>
              <td>{course.carga}</td>
              <td className="actions-cell">
                <button className="btn-green">+</button>
                <button className="btn-blue">i</button>
                <button 
                  className="btn-orange" 
                  onClick={() => { setSelectedCourse(course); setDeleteModalOpen(true); }}
                >
                  !
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Exclusão usando o componente que criamos acima */}
      <Modal 
        isOpen={isDeleteModalOpen} 
        title="Confirmar Exclusão" 
        onClose={() => setDeleteModalOpen(false)}
      >
        <p>Deseja realmente excluir o curso <strong>{selectedCourse?.nome}</strong>?</p>
        <button className="btn-confirm-delete">SIM, EXCLUIR</button>
      </Modal>
    </div>
  );
};

export default CourseManagementPage;