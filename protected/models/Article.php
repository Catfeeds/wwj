<?php

/**
 * This is the model class for table "article".
 *
 * The followings are the available columns in table 'article':
 * @property integer $id
 * @property string $title
 * @property string $sub_title
 * @property integer $payer
 * @property integer $time
 * @property string $place
 * @property string $author
 * @property integer $show_place
 * @property string $source
 * @property integer $type
 * @property string $desc
 * @property string $image
 * @property string $content
 * @property integer $cid
 * @property integer $sort
 * @property integer $status
 * @property string $data_conf
 * @property integer $deleted
 * @property integer $created
 * @property integer $updated
 */
class Article extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'article';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('created', 'required'),
			array('payer, time, show_place, type, cid, sort, status, deleted, created, updated', 'numerical', 'integerOnly'=>true),
			array('title, sub_title, place, author, source, desc, image', 'length', 'max'=>255),
			array('content, data_conf', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, title, sub_title, payer, time, place, author, show_place, source, type, desc, image, content, cid, sort, status, data_conf, deleted, created, updated', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'title' => 'Title',
			'sub_title' => 'Sub Title',
			'payer' => 'Payer',
			'time' => 'Time',
			'place' => 'Place',
			'author' => 'Author',
			'show_place' => 'Show Place',
			'source' => 'Source',
			'type' => 'Type',
			'desc' => 'Desc',
			'image' => 'Image',
			'content' => 'Content',
			'cid' => 'Cid',
			'sort' => 'Sort',
			'status' => 'Status',
			'data_conf' => 'Data Conf',
			'deleted' => 'Deleted',
			'created' => 'Created',
			'updated' => 'Updated',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('sub_title',$this->sub_title,true);
		$criteria->compare('payer',$this->payer);
		$criteria->compare('time',$this->time);
		$criteria->compare('place',$this->place,true);
		$criteria->compare('author',$this->author,true);
		$criteria->compare('show_place',$this->show_place);
		$criteria->compare('source',$this->source,true);
		$criteria->compare('type',$this->type);
		$criteria->compare('desc',$this->desc,true);
		$criteria->compare('image',$this->image,true);
		$criteria->compare('content',$this->content,true);
		$criteria->compare('cid',$this->cid);
		$criteria->compare('sort',$this->sort);
		$criteria->compare('status',$this->status);
		$criteria->compare('data_conf',$this->data_conf,true);
		$criteria->compare('deleted',$this->deleted);
		$criteria->compare('created',$this->created);
		$criteria->compare('updated',$this->updated);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Article the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
