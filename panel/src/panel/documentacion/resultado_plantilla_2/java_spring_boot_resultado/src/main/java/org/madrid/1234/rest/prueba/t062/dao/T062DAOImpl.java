package org.madrid.1234.rest.prueba.t062.dao;

import org.madrid.1234.rest.prueba.t062.domain.T062;
import org.madrid.japi.jpa.dao.JapiBaseDAOImpl;
import org.springframework.context.annotation.DependsOn;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

/**
 * Clase del DAO del objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t062.domain.T062}</code>
 *
 * @author Generador de API Rest
 */
@DependsOn("sessionFactory")
@Repository("T062DAO")
public class T062DAOImpl extends JapiBaseDAOImpl<T062, String> implements T062DAO {
    public T062DAOImpl(HibernateTemplate hibernateTemplate) {
        super(hibernateTemplate);
    }
}
