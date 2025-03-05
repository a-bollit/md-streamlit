package org.madrid.1234.rest.prueba.t238.dao;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.japi.jpa.dao.JapiBaseDAOImpl;
import org.springframework.context.annotation.DependsOn;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

/**
 * Clase del DAO del objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t238.domain.T238}</code>
 *
 * @author Generador de API Rest
 */
@DependsOn("sessionFactory")
@Repository("T238DAO")
public class T238DAOImpl extends JapiBaseDAOImpl<T238, String> implements T238DAO {
    public T238DAOImpl(HibernateTemplate hibernateTemplate) {
        super(hibernateTemplate);
    }
}
